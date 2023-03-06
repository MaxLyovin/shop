import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppRoutes } from '../../../../types/AppRoutes';

import { NavLinkProps } from './NavLink.types';

export const NavLink = ({ hrefUrl, text }: NavLinkProps) => {
  const { pathname } = useRouter();

  const isActive = () => {
    if (hrefUrl === AppRoutes.DASHBOARD) {
      return hrefUrl === pathname;
    }
    return pathname.includes(hrefUrl);
  };

  return (
    <Link href={hrefUrl} className={isActive() ? 'text-yellow-600' : 'text-white'}>
      {text}
    </Link>
  );
};
