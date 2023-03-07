import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

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

  const getTextColor = () => {
    return isActive() ? 'text-yellow-600' : 'text-white';
  };

  return (
    <Link href={hrefUrl} className={classNames('flex', 'items-center', 'justify-center', 'uppercase', getTextColor())}>
      {text}
    </Link>
  );
};
