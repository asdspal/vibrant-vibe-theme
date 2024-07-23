import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'your-store.myshopify.com',
    storefrontToken: 'your_storefront_api_token',
    storefrontApiVersion: '2023-04',
    imageOptimization: {
      format: 'webp',
      useSrcset: true,
    }
  },
});
