import { useState } from 'react';
import { Calendar, DollarSign, Home, Image, Info, MapPin, Shield, Share2, Video, Wind } from 'lucide-react';

export default function CreateRoomForm() {
  const [formData, setFormData] = useState({
    room_address: '',
    room_longitude: '',
    room_latitude: '',
    room_price: '',
    room_is_sharing: false,
    room_furnished: 'unfurnished',
    room_security_fee: '',
    room_ac: false,
    room_commodity_bills: false,
    room_description: '',
    room_next_availability: '',
    room_prior_notice_period: '',
    room_waiting_list: false
  });

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('location');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files);
    setImages([...images, ...newImages]);
  };

  const handleVideoUpload = (e) => {
    const newVideos = Array.from(e.target.files);
    setVideos([...videos, ...newVideos]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const removeVideo = (index) => {
    const newVideos = [...videos];
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.room_address) newErrors.room_address = 'Address is required';
    
    if (formData.room_longitude && (isNaN(formData.room_longitude) || 
        parseFloat(formData.room_longitude) < -180 || parseFloat(formData.room_longitude) > 180)) {
      newErrors.room_longitude = 'Longitude must be between -180 and 180';
    }
    
    if (formData.room_latitude && (isNaN(formData.room_latitude) || 
        parseFloat(formData.room_latitude) < -90 || parseFloat(formData.room_latitude) > 90)) {
      newErrors.room_latitude = 'Latitude must be between -90 and 90';
    }
    
    if (!formData.room_price) newErrors.room_price = 'Price is required';
    if (formData.room_price && isNaN(formData.room_price)) newErrors.room_price = 'Price must be a number';
    
    if (images.length === 0) newErrors.images = 'At least one image is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', { ...formData, images, videos });
      setIsSubmitted(true);
    }
  };

  const tabs = [
    { id: 'location', label: 'Location', icon: <MapPin size={20} /> },
    { id: 'details', label: 'Details', icon: <Info size={20} /> },
    { id: 'features', label: 'Features', icon: <Home size={20} /> },
    { id: 'media', label: 'Media', icon: <Image size={20} /> },
    { id: 'availability', label: 'Availability', icon: <Calendar size={20} /> }
  ];

  const TabContent = () => {
    switch (activeTab) {
      case 'location':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="room_address"
                value={formData.room_address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                placeholder="Enter full address"
              ></textarea>
              {errors.room_address && (
                <p className="mt-1 text-sm text-red-600">{errors.room_address}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Longitude
                </label>
                <input
                  type="number"
                  name="room_longitude"
                  value={formData.room_longitude}
                  onChange={handleChange}
                  step="0.000001"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                  placeholder="-180.000000 to 180.000000"
                />
                {errors.room_longitude && (
                  <p className="mt-1 text-sm text-red-600">{errors.room_longitude}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Latitude
                </label>
                <input
                  type="number"
                  name="room_latitude"
                  value={formData.room_latitude}
                  onChange={handleChange}
                  step="0.000001"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                  placeholder="-90.000000 to 90.000000"
                />
                {errors.room_latitude && (
                  <p className="mt-1 text-sm text-red-600">{errors.room_latitude}</p>
                )}
              </div>
            </div>
            
            <div className="pt-4">
              <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                <div className="text-blue-500 mr-3 mt-1">
                  <Info size={18} />
                </div>
                <p className="text-sm text-blue-700">
                  Adding precise coordinates helps potential tenants find your property on the map. You can find coordinates by right-clicking a location on Google Maps.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'details':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="room_description"
                value={formData.room_description}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                placeholder="Describe your room, including special features, neighborhood, and any rules..."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (per month) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign size={18} />
                  </div>
                  <input
                    type="number"
                    name="room_price"
                    value={formData.room_price}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                    placeholder="0"
                  />
                </div>
                {errors.room_price && (
                  <p className="mt-1 text-sm text-red-600">{errors.room_price}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Security Deposit
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Shield size={18} />
                  </div>
                  <input
                    type="number"
                    name="room_security_fee"
                    value={formData.room_security_fee}
                    onChange={handleChange}
                    className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Furnishing Status
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['unfurnished', 'semi-furnished', 'fully-furnished'].map((option) => (
                  <div 
                    key={option} 
                    onClick={() => setFormData({...formData, room_furnished: option})}
                    className={`
                      border-2 rounded-lg p-4 cursor-pointer transition-all
                      ${formData.room_furnished === option 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'}
                    `}
                  >
                    <div className="text-center">
                      {option === 'unfurnished' && <Home size={28} className="mx-auto text-gray-600" />}
                      {option === 'semi-furnished' && <Home size={28} className="mx-auto text-blue-600" />}
                      {option === 'fully-furnished' && <Home size={28} className="mx-auto text-green-600" />}
                      <p className="mt-2 text-sm font-medium capitalize">
                        {option.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'features':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className={`border rounded-lg p-4 transition-all ${formData.room_is_sharing ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="room_is_sharing"
                      name="room_is_sharing"
                      checked={formData.room_is_sharing}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="room_is_sharing" className="ml-2 text-gray-700 font-medium cursor-pointer flex-grow">
                      Shared Room
                    </label>
                    <div className="text-blue-500">
                      <Share2 size={20} />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Multiple tenants sharing the same room
                  </p>
                </div>

                <div className={`border rounded-lg p-4 transition-all ${formData.room_ac ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="room_ac"
                      name="room_ac"
                      checked={formData.room_ac}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="room_ac" className="ml-2 text-gray-700 font-medium cursor-pointer flex-grow">
                      Air Conditioning
                    </label>
                    <div className="text-blue-500">
                      <Wind size={20} />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Room is equipped with air conditioning
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className={`border rounded-lg p-4 transition-all ${formData.room_commodity_bills ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="room_commodity_bills"
                      name="room_commodity_bills"
                      checked={formData.room_commodity_bills}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="room_commodity_bills" className="ml-2 text-gray-700 font-medium cursor-pointer flex-grow">
                      Bills Included
                    </label>
                    <div className="text-blue-500">
                      <DollarSign size={20} />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Rent includes utility bills (water, electricity, etc.)
                  </p>
                </div>

                <div className={`border rounded-lg p-4 transition-all ${formData.room_waiting_list ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="room_waiting_list"
                      name="room_waiting_list"
                      checked={formData.room_waiting_list}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="room_waiting_list" className="ml-2 text-gray-700 font-medium cursor-pointer flex-grow">
                      Enable Waiting List
                    </label>
                    <div className="text-blue-500">
                      <Calendar size={20} />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Allow potential tenants to join a waiting list
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'media':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Images <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Image size={24} className="text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-blue-600">Click to upload images</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP up to 10MB</p>
                </label>
              </div>
              {errors.images && (
                <p className="mt-1 text-sm text-red-600">{errors.images}</p>
              )}
              
              {images.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {images.length} image{images.length !== 1 ? 's' : ''} selected
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 border">
                          <img 
                            src="/api/placeholder/300/300" 
                            alt={`Preview ${index}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <p className="text-xs text-center mt-1 truncate">{image.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Videos (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                  id="video-upload"
                />
                <label htmlFor="video-upload" className="cursor-pointer">
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Video size={24} className="text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-purple-600">Click to upload videos</p>
                  <p className="text-xs text-gray-500 mt-1">MP4, WebM up to 100MB</p>
                </label>
              </div>
              
              {videos.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {videos.length} video{videos.length !== 1 ? 's' : ''} selected
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.map((video, index) => (
                      <div key={index} className="flex items-center p-3 border rounded-lg bg-gray-50">
                        <div className="flex-shrink-0">
                          <Video size={24} className="text-purple-600" />
                        </div>
                        <div className="ml-3 flex-grow overflow-hidden">
                          <p className="text-sm font-medium truncate">{video.name}</p>
                          <p className="text-xs text-gray-500">
                            {(video.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeVideo(index)}
                          className="ml-2 text-gray-500 hover:text-red-500"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      case 'availability':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Available Date
              </label>
              <input
                type="date"
                name="room_next_availability"
                value={formData.room_next_availability}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notice Period (days)
              </label>
              <input
                type="number"
                name="room_prior_notice_period"
                value={formData.room_prior_notice_period}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                placeholder="0"
              />
              <p className="mt-1 text-xs text-gray-500">
                Number of days notice required before moving in
              </p>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Listing Submitted!</h2>
          <p className="text-center text-gray-600 mb-8">Your room has been successfully listed.</p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-blue-800 mb-2">What happens next?</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>Our team will review your listing within 24 hours</li>
              <li>You'll receive a confirmation email once approved</li>
              <li>Your listing will be visible to potential tenants</li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setActiveTab('location');
                setImages([]);
                setVideos([]);
                setFormData({
                  room_address: '',
                  room_longitude: '',
                  room_latitude: '',
                  room_price: '',
                  room_is_sharing: false,
                  room_furnished: 'unfurnished',
                  room_security_fee: '',
                  room_ac: false,
                  room_commodity_bills: false,
                  room_description: '',
                  room_next_availability: '',
                  room_prior_notice_period: '',
                  room_waiting_list: false
                });
              }} 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Add Another Room
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-0">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Add New Room</h1>
        <p className="text-blue-100 mt-1">Fill in the details to list your room</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-b-xl shadow-lg">
        <div className="border-b">
          <nav className="flex overflow-x-auto px-2 py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 sm:px-4 py-2 mr-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-4 sm:p-6">
          <TabContent />
          
          <div className="flex justify-between mt-8 sm:mt-10">
            <button 
              type="button"
              onClick={() => {
                const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
                if (currentIndex > 0) {
                  setActiveTab(tabs[currentIndex - 1].id);
                }
              }}
              className={`px-3 sm:px-5 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg transition-colors
                ${activeTab === tabs[0].id ? 'invisible' : ''}`}
            >
              Previous
            </button>
            
            {activeTab === tabs[tabs.length - 1].id ? (
              <button 
                type="submit" 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-colors shadow-md"
              >
                Submit Listing
              </button>
            ) : (
              <button 
                type="button"
                onClick={() => {
                  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
                  if (currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1].id);
                  }
                }}
                className="px-3 sm:px-5 py-2 text-blue-700 bg-blue-100 hover:bg-blue-200 font-medium rounded-lg transition-colors"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}