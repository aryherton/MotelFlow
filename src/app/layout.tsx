/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import { Provider as ProviderTheme } from './contexts/theme';
// import './globals.css';
import { checkIsPublicRoute } from '@/functions/check-is-public-route';
import PrivateRoute from '@/components/PrivateRoute';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname!);

  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        { isPublicPage && <ProviderTheme>{children}</ProviderTheme> }
        {!isPublicPage && (
          <ProviderTheme>
            <PrivateRoute>
              {children}
            </PrivateRoute>
          </ProviderTheme>
        )}
      </body>
    </html>
  );
}
