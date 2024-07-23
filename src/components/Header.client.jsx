import {useState, useEffect} from 'react';
import {Link, useCart} from '@shopify/hydrogen';
import {motion} from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {totalQuantity} = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2 transition-colors duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 223, 230, 0.8)' : 'transparent',
      }}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Vibrant Vibe
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-800 hover:text-pink-600 transition-colors">Home</Link>
          <Link to="/products" className="text-gray-800 hover:text-pink-600 transition-colors">Shop</Link>
          <Link to="/about" className="text-gray-800 hover:text-pink-600 transition-colors">About</Link>
          <Link to="/cart" className="text-gray-800 hover:text-pink-600 transition-colors">
            Cart ({totalQuantity})
          </Link>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
