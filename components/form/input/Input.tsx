import classNames from 'classnames';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import { InputProps } from './Input.types';

export const Input = ({ label, name }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message?.toString();

  return (
    <label className="flex flex-col mb-3">
      <span className="text-gray-700">{label}</span>
      <input
        {...register(name)}
        type="text"
        className={classNames('mt-1 block w-full rounded-md', {
          ' border-red-500': errorMessage,
        })}
      />
      <p className="text-sm text-red-500 h-3">{errorMessage}</p>
    </label>
  );
};
