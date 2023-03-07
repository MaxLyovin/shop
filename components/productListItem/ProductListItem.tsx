import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AppRoutes } from '../../types/AppRoutes';

import { ProductListItemProps } from './ProductListItem.types';

export const ProductListItem = ({ name, slug, price, images: [primaryImage] }: ProductListItemProps) => (
  <Link href={`${AppRoutes.PRODUCTS}/${slug}`}>
    <div className="bg-white rounded-md shadow-md flex flex-col p-3 hover:opacity-90">
      <Image src={primaryImage.url} alt={slug} width={300} height={400} className="self-center" />
      <p className="text-lg font-bold">{name}</p>
      <p>{`${price}$`}</p>
    </div>
  </Link>
);
