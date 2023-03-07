export type ProductListItemProps = {
  name: string;
  slug: string;
  images: {
    width?: number | null | undefined;
    height?: number | null | undefined;
    url: string;
  }[];
  price: number;
};
