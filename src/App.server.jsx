import React, {Suspense, lazy} from 'react';
import {
  FileRoutes,
  ShopifyProvider,
  CartProvider,
} from '@shopify/hydrogen';
import {DefaultSeo} from '@shopify/hydrogen';
import {Layout} from './components/Layout.server';

const ProductGrid = lazy(() => import('./components/ProductGrid.server'));

export default function App({request}) {
  const pathname = new URL(request.normalizedUrl).pathname;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopifyProvider>
        <CartProvider>
          <DefaultSeo type="defaultSeo" />
          <Layout>
            <FileRoutes basePath={pathname} />
          </Layout>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}
