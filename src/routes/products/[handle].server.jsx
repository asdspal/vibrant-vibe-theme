import {Suspense} from 'react';
import {
  gql,
  useShopQuery,
  useServerAnalytics,
  ShopifyAnalyticsConstants,
  Seo,
} from '@shopify/hydrogen';
import {ProductOptionsProvider, MediaFile, useProductOptions} from '@shopify/hydrogen';
import ProductDetails from '../../components/ProductDetails.client';

const PRODUCT_QUERY = gql`
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      descriptionHtml
      media(first: 10) {
        nodes {
          ... on MediaImage {
            id
            image {
              url
              width
              height
              altText
            }
          }
        }
      }
      variants(first: 100) {
        nodes {
          id
          availableForSale
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

export default function Product({params}) {
  const {handle} = params;
  const {data} = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
  });

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: data.product.id,
    },
  });

  return (
    <ProductOptionsProvider data={data.product}>
      <Suspense>
        <Seo type="product" data={data.product} />
      </Suspense>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 my-16">
        <div className="md:sticky md:top-16">
          <Suspense>
            <MediaFile
              data={data.product.media.nodes[0]}
              options={{crop: 'center'}}
            />
          </Suspense>
        </div>
        <div>
          <ProductDetails product={data.product} />
        </div>
      </div>
    </ProductOptionsProvider>
  );
}
