import React from 'react';
import { FieldValues, FormProvider, useForm, useFormContext, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '@/components/form/input/Input';

const formSchema = yup
  .object({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    firstName: yup.string().required(),
    secondName: yup.string().required(),
    adress: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof formSchema>;

const CheckoutPage = () => {
  const methods = useForm<FormData>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-2">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div>
            <div>
              <h3 className="mb-1 text-xl">Contact Information</h3>
              <Input name="email" label="Email addres" />
              <Input name="phone" label="Second name" />
            </div>
            <div>
              <h3 className="mb-1 text-xl">Shipping Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <Input name="firstName" label="First name" />
                <Input name="secondName" label="Second name" />
              </div>
              <Input name="adress" label="Adress" />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>

      <div>order summary</div>
    </div>
  );
};

export default CheckoutPage;
