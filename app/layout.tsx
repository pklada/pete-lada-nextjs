import { Layout } from '@/components/Layout/Layout';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pete Lada | Product design generalist',
  description:
    "Hi! I'm Pete Lada, a product design generalist. I'm currently a staff product designer at Eco. Previously, I was a design lead at Quora, and co-founded and led product design at Guidebook, a mobile event guide platform."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#8B572A" />
        <meta name="msapplication-navbutton-color" content="#8B572A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#8B572A" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
