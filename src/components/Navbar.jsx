import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('cartItems');
      if (savedCart) {
        const items = JSON.parse(savedCart);
        const count = items.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(count);
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">FoodDelivery</Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/menu" className="hover:text-gray-300">Menu</Link>
          <Link to="/restaurants" className="hover:text-gray-300">Restaurants</Link>
          
          <div className="relative">
            <Link to="/cart" className="hover:text-gray-300 flex items-center">
              <FaShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          
          {!isLoggedIn ? (
            <>
              <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
              <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/orders" className="hover:text-gray-300">My Orders</Link>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="hover:text-gray-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;