export type Product = {
  id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  images: {
    width?: number | null | undefined;
    height?: number | null | undefined;
    url: string;
  }[];
};

export type ProductListItemProps = {
  id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  images: {
    width?: number | null | undefined;
    height?: number | null | undefined;
    url: string;
  }[];
};
