import {useShopQuery, gql, CacheLong} from '@shopify/hydrogen';
import ProductCard from './ProductCard.client';

const QUERY = gql`
  query Products {
    products(first: 8) {
      nodes {
        id
        title
        publishedAt
        handle
        variants(first: 1) {
          nodes {
            id
            image {
              url
              altText
              width
              height
            }
            priceV2 {
              amount
              currencyCode
            }
            compareAtPriceV2 {
              amount
	      currencyCode
            }
          }
        }
      }
    }
  }
`;

export default function ProductGrid() {
  const {data} = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.products.nodes.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
