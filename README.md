# Vibrant Vibe - Hydrogen Theme(UnTested : WIP)

Vibrant Vibe is a visually stunning and performant Shopify Hydrogen theme designed to create engaging e-commerce experiences. It features smooth animations, quick product views, and optimized performance.

## Features

- Responsive design for mobile, tablet, and desktop
- Performance-optimized with lazy loading and asset optimization
- Animated page transitions for a fluid user experience
- Quick view feature for products
- Size guide for easy product selection
- Customizable color scheme with a vibrant, pastel-oriented default palette

## Prerequisites

- Node.js version 16.14.0 or higher
- npm or yarn package manager
- A Shopify store with products

## Installation

1. Clone this repository:
git clone https://github.com/asdspal/vibrant-vibe-theme.git


2. Navigate to the project directory:

cd vibrant-vibe-theme


3. Install dependencies:

npm install

or

yarn install


4. Set up your `.env` file with your Shopify store credentials:

SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_API_TOKEN=your_storefront_api_token


## Development

To start the development server:

npm run dev

or

yarn dev


This will start the Hydrogen server and you can view your store at `http://localhost:3000`.

## Building for Production

To create a production build:

npm run build

or

yarn build


## Customization

- Colors: Edit the `tailwind.config.js` file to customize the color palette.
- Typography: Adjust font settings in `src/styles/tailwind.css`.
- Layout: Modify components in the `src/components` directory to change the layout and structure.

## Contributing

We welcome contributions to Vibrant Vibe! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For support, please open an issue in the GitHub repository or contact [your-email@example.com].

## Acknowledgments

- Shopify Hydrogen team for the amazing framework
- [List any other acknowledgments or third-party libraries used]


