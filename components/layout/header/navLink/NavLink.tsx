import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLinkProps } from './NavLink.types';

export const NavLink = ({ hrefUrl, text }: NavLinkProps) => {
  const { pathname } = useRouter();

  const isAcite = hrefUrl === pathname;

  return (
    <Link href={hrefUrl} className={isAcite ? 'text-yellow-600' : 'text-white'}>
      {text}
    </Link>
  );
};
