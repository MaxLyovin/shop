import React from 'react';

import { MainProps } from './Main.types';

export const Main = ({ children }: MainProps) => {
  return <main className="flex-grow">{children}</main>;
};
