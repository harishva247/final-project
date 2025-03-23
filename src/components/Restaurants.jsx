import { useNavigate } from 'react-router-dom';

const Restaurants = () => {
  const navigate = useNavigate();
  
  const restaurants = [
    {
      id: 1,
      name: "The Italian Kitchen",
      cuisine: "Italian",
      rating: 4.8,
      deliveryTime: "25-35",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format",
      description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas"
    },
    {
      id: 2,
      name: "Sushi Master",
      cuisine: "Japanese",
      rating: 4.6,
      deliveryTime: "30-45",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format",
      description: "Premium sushi and Japanese dishes made with fresh ingredients"
    },
    {
      id: 3,
      name: "Burger House",
      cuisine: "American",
      rating: 4.5,
      deliveryTime: "20-30",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format",
      description: "Gourmet burgers and classic American comfort food"
    },
    {
      id: 4,
      name: "Spice Garden",
      cuisine: "Indian",
      rating: 4.7,
      deliveryTime: "35-50",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format",
      description: "Authentic Indian curries and tandoori specialties"
    }
  ];

  const handleViewMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Restaurants</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map(restaurant => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={restaurant.image} 
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-gray-600">{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                <p className="text-sm text-gray-500 mb-4">{restaurant.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {restaurant.deliveryTime} min delivery
                  </span>
                  <button 
                    onClick={handleViewMenu}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;