import React from 'react';
import { useMutation } from 'react-query';
import { useStripe } from '@stripe/react-stripe-js';

import { useCartState } from '@/hooks/useCartState';
import { formatToZloty } from 'services/currency/currencyFormatter';

type LineItem = {
  price_data: { currency: string; unit_amount: number; product_data: { name: string } };
  quantity: number;
};

const CartPage = () => {
  const { items, fullyRemoveItemFromCart, getCartTotalItems, getCartTotalPrice } = useCartState();
  const stripe = useStripe();

  const { mutate, isLoading } = useMutation(
    (data: LineItem[]) => {
      return fetch('http://localhost:3000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    },
    {
      onSuccess: async (data) => {
        const response = await data.json();
        await stripe?.redirectToCheckout({ sessionId: response?.session?.id });
      },
    },
  );

  const handleClick = () => {
    mutate(
      items.map((item) => ({
        price_data: { currency: 'PLN', unit_amount: item.price, product_data: { name: item.name } },
        adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
        quantity: item.amount,
      })),
    );
  };

  return !items.length ? (
    <>Cart is empty</>
  ) : (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="basis-4/6 ">
        <ul className="grid grid-cols-1 divide-y">
          {items.map(({ id, name, price, amount }) => (
            <li key={id}>
              <div className="flex justify-between p-4 items-center">
                <p>{name}</p>
                <div className="flex gap-4 items-center">
                  <p>amount: {amount}</p>
                  <p>total price: {formatToZloty(price * amount)}</p>
                  <button onClick={() => fullyRemoveItemFromCart(id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <p className="font-bold">Cart summary</p>
        <p>Total items: {getCartTotalItems()}</p>
        <p>Total price: {formatToZloty(getCartTotalPrice())}</p>
        <button
          onClick={handleClick}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {isLoading ? 'Loading...' : 'Make order'}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
