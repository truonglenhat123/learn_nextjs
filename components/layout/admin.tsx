import Link from 'next/link';
import * as React from 'react';
import { LayoutPage } from '../../Model/common';

export interface IAdminLayout {
}

export  function AdminLayout ({children}: LayoutPage) {
  return (
    <>
    <div>
      <h1>SIDE BAR</h1>
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

