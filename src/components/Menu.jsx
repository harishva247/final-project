import { useState, useEffect } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: "Classic Burger",
      price: 12.99,
      category: "burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format",
      description: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 14.99,
      category: "pizza",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&auto=format",
      description: "Fresh mozzarella, tomatoes, and basil on crispy crust"
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 9.99,
      category: "salads",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&auto=format",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing"
    },
    {
      id: 4,
      name: "Chicken Wings",
      price: 11.99,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&auto=format",
      description: "Crispy wings with your choice of sauce"
    }
  ];

  const categories = ['all', 'burgers', 'pizza', 'salads', 'appetizers'];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Update cart count in localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Menu</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-indigo-600">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Add to Cart</span>
                  {cartItems.find(i => i.id === item.id) && (
                    <span className="bg-white text-indigo-600 rounded-full w-5 h-5 flex items-center justify-center text-sm">
                      {cartItems.find(i => i.id === item.id).quantity}
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;