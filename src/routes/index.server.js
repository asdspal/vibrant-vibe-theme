import {Suspense} from 'react';
import {CacheLong, gql, useShopQuery, Seo} from '@shopify/hydrogen';
import ProductGrid from '../components/ProductGrid.server';

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;

export default function Home() {
  const {data} = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return (
    <>
      <Seo type="homepage" data={{title: data.shop.name, description: data.shop.description}} />
      <div className="relative bg-white overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to {data.shop.name}
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                {data.shop.description}
              </p>
            </div>
            <div className="mt-10">
              
                href="#featured-items"
                className="inline-block text-center bg-pink-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-pink-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="featured-items" className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
          <div className="mt-6">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
