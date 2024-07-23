import {Link, Image, Money} from '@shopify/hydrogen';
import {motion} from 'framer-motion';
import {useState} from 'react';
import QuickView from './QuickView.client';


export default function ProductCard({product}) {
  const {priceV2, compareAtPriceV2} = product.variants.nodes[0] || {};
  const isOnSale = compareAtPriceV2 && compareAtPriceV2.amount > priceV2.amount;

  return (
    <motion.div
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      className="group"
    >
      <Link to={`/products/${product.handle}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            data={product.variants.nodes[0].image}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
	    loading="lazy"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          <Money withoutTrailingZeros data={priceV2} />
          {isOnSale && (
            <span className="ml-2 text-sm text-red-500 line-through">
              <Money withoutTrailingZeros data={compareAtPriceV2} />
            </span>
          )}
        </p>
      </Link>
	  <button onClick={() => setIsQuickViewOpen(true)}>Quick View</button>
      <QuickView
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={product}
      />
    </motion.div>
  );
}
