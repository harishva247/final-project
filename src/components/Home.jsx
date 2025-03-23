import { Link } from 'react-router-dom';
import { FaTruck, FaUtensils, FaLeaf } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format"
            alt="Food background"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Delicious Food Delivered
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Order food from the best local restaurants and get it delivered to your doorstep.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/menu"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  View Menu
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/restaurants"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Browse Restaurants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide the best food delivery service in town
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <FaTruck className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Fast Delivery</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get your food delivered within 30 minutes of ordering
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <FaUtensils className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Quality Food</h3>
                <p className="mt-2 text-base text-gray-500">
                  Partner with the best restaurants in your area
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center">
                  <FaLeaf className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">Fresh Ingredients</h3>
                <p className="mt-2 text-base text-gray-500">
                  Only the freshest ingredients in every meal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Our Service
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We're passionate about connecting hungry customers with the best local restaurants. Our platform makes it easy to discover new places to eat and get your favorite meals delivered right to your door.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <Link
                    to="/restaurants"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Find Restaurants
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&auto=format"
                alt="Restaurant interior"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;