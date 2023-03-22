import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useCartState } from '@/hooks/useCartState';
import { AppRoutes } from '@/types/AppRoutes';
import { formatToZloty } from 'services/currency/currencyFormatter';

import { ProductListItemProps } from './ProductListItem.types';

export const ProductListItem = (product: ProductListItemProps) => {
  const { addItemToCart } = useCartState();

  const handleAddItem = (event: React.MouseEvent) => {
    event.preventDefault();
    addItemToCart(product);
  };

  return (
    <Link href={`${AppRoutes.PRODUCTS}/${product.slug}`}>
      <div className="bg-white rounded-md shadow-md flex flex-col p-3 hover:opacity-90">
        <Image src={product.images[0].url} alt={product.slug} width={300} height={400} className="self-center" />
        <p className="text-lg font-bold">{product.name}</p>
        <p>{formatToZloty(product.price)}</p>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={(e) => handleAddItem(e)}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
};
