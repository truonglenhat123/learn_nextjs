import Link from 'next/link';
import * as React from 'react';
import { LayoutPage } from '../../Model/common';

export interface IMainLayout {
}

export  function MainLayout ({children}: LayoutPage) {
  return (
    <>
    <div>
    <Link href="/">
      <a>To Home</a>
    </Link>
     <Link href="/about">
      <a>To About</a>
    </Link>
      <div>
            {children}
      </div>
    </div>
    </>
  );
}
