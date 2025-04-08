import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Search, Sliders, Clock, MapPin, Star } from "lucide-react";
import Navbar from "../components/HomePage/Navbar";

const SearchPage = () => {
   const [recentSearches, setRecentSearches] = useState([]);
   const [recentlyViewed, setRecentlyViewed] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

  const fakeRecentSearches = [
    { id: 1, name: "Beachfront Property", location: "Miami, FL" },
    { id: 2, name: "Mountain Retreat", location: "Aspen, CO" },
    { id: 3, name: "City Center Apartment", location: "New York, NY" },
  ];

  const fakeRecentlyViewed = [
    {
      id: 1,
      name: "Luxury Villa",
      location: "Beverly Hills, CA",
      rating: 4.5,
      pricePerNight: 1200,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Modern Loft",
      location: "San Francisco, CA",
      rating: 4.7,
      pricePerNight: 950,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cozy Cottage",
      location: "Lake Tahoe, CA",
      rating: 4.3,
      pricePerNight: 800,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Lazy Cottage",
      location: "Lake Tahoe, CA",
      rating: 4.3,
      pricePerNight: 800,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Hazy Cottage",
      location: "Lake Tahoe, CA",
      rating: 4.3,
      pricePerNight: 800,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Crazzzy Cottage",
      location: "Lake Tahoe, CA",
      rating: 4.3,
      pricePerNight: 800,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const fetchRecentSearches = async () => {
    try {
      const response = await fetch("/api/recent-searches");
      if (!response.ok) {
        throw new Error("Failed to fetch recent searches");
      }
      const data = await response.json();
      setRecentSearches(data);
    } catch (err) {
      console.error("Error fetching recent searches:", err);
      setRecentSearches(fakeRecentSearches);
    }
  };

  const fetchRecentlyViewed = async () => {
    try {
      const response = await fetch("/api/recently-viewed");
      if (!response.ok) {
        throw new Error("Failed to fetch recently viewed properties");
      }
      const data = await response.json();
      setRecentlyViewed(data);
    } catch (err) {
      console.error("Error fetching recently viewed properties:", err);
      setRecentlyViewed(fakeRecentlyViewed);
    }
  };

  const clearAllSearches = async () => {
    try {
      const response = await fetch("/api/clear-searches", {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to clear searches");
      }
      setRecentSearches([]);
    } catch (err) {
      console.error("Error clearing searches:", err);
      setError("Failed to clear searches");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
         const response = await fetch("/api/recent-searches");
         if (!response.ok) {
            throw new Error("Failed to fetch recent searches");
         }
         const data = await response.json();
         setRecentSearches(data);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const handleBackClick = () => {};
  const handleNotificationClick = () => {};
  const handlePropertyClick = (propertyId) => {
    window.location.href = `/property/${propertyId}`;
  };
  const handleSeeAllClick = () => {
    window.location.href = "/all-properties";
  };

  return (
    <div className="bg-white py-24 min-h-screen relative">
      <Navbar />
      <div className="p-4 mt-24 pt-2 overflow-y-auto" style={{ maxHeight: "calc(100vh - 112px)" }}>
        {recentSearches.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-base">Recent Searches</h2>
              <button className="text-red-500 text-sm hover:text-red-600" onClick={clearAllSearches}>
                Clear All
              </button>
            </div>
            <div className="space-y-4">
              {recentSearches.map((item) => (
                <div key={item.id} className="flex items-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <Clock size={16} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-gray-500 text-xs">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {recentlyViewed.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-base">Recently Viewed</h2>
              <button className="text-blue-600 text-sm hover:text-blue-700" onClick={handleSeeAllClick}>
                See All
              </button>
            </div>
            <div className="space-y-4">
              {recentlyViewed.map((property) => (
                <div key={property.id} className="flex mb-4 cursor-pointer" onClick={() => handlePropertyClick(property.id)}>
                  <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden mr-3">
                    <img
                      src={property.imageUrl}
                      alt={property.name}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <h3 className="font-medium text-sm flex-1">{property.name}</h3>
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-500 mr-1 fill-yellow-500" />
                        <span className="text-sm">{property.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs mb-1 flex items-center">
                      <MapPin size={12} className="mr-1" />
                      {property.location}
                    </p>
                    <p className="text-blue-600 font-bold text-sm">
                      ${property.pricePerNight}
                      <span className="text-gray-500 font-normal"> /night</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-6">
            <p>{error}</p>
            <button className="text-blue-500 underline mt-2" onClick={() => window.location.reload()}>
              Try again
            </button>
          </div>
        )}

        {!isLoading && !error && recentSearches.length === 0 && recentlyViewed.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No recent activity found.</p>
            <p className="mt-2 text-blue-500">Start searching for your perfect stay!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
