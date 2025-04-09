import { useState } from 'react';
import { Calendar, DollarSign, Home, Image, Info, MapPin, Shield, Share2, Video, Wind } from 'lucide-react';

// Tab Components

/** Location Tab */
function LocationTab({ formData, errors, handleChange }) {
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
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter full address"
        />
        {errors.room_address && <p className="mt-1 text-sm text-red-600">{errors.room_address}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
          <input
            type="number"
            name="room_longitude"
            value={formData.room_longitude}
            onChange={handleChange}
            step="0.000001"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="-180 to 180"
          />
          {errors.room_longitude && <p className="mt-1 text-sm text-red-600">{errors.room_longitude}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
          <input
            type="number"
            name="room_latitude"
            value={formData.room_latitude}
            onChange={handleChange}
            step="0.000001"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="-90 to 90"
          />
          {errors.room_latitude && <p className="mt-1 text-sm text-red-600">{errors.room_latitude}</p>}
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg flex items-start">
        <Info size={18} className="text-blue-500 mr-2 mt-1" />
        <p className="text-sm text-blue-700">Add coordinates using Google Maps for precision.</p>
      </div>
    </div>
  );
}

/** Details Tab */
function DetailsTab({ formData, errors, handleChange, handleFurnishingSelect }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="room_description"
          value={formData.room_description}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Describe your room..."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price (per month) <span className="text-red-500">*</span></label>
          <div className="relative">
            <DollarSign size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="number"
              name="room_price"
              value={formData.room_price}
              onChange={handleChange}
              className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="0"
            />
          </div>
          {errors.room_price && <p className="mt-1 text-sm text-red-600">{errors.room_price}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Security Deposit</label>
          <div className="relative">
            <Shield size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="number"
              name="room_security_fee"
              value={formData.room_security_fee}
              onChange={handleChange}
              className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="0"
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Furnishing Status</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['unfurnished', 'semi-furnished', 'fully-furnished'].map((option) => (
            <div
              key={option}
              onClick={() => handleFurnishingSelect(option)}
              className={`border-2 p-4 rounded-lg cursor-pointer ${formData.room_furnished === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <Home size={28} className={`mx-auto ${option === 'unfurnished' ? 'text-gray-600' : option === 'semi-furnished' ? 'text-blue-600' : 'text-green-600'}`} />
              <p className="mt-2 text-sm font-medium text-center capitalize">{option.replace('-', ' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Features Tab */
function FeaturesTab({ formData, handleChange }) {
  const features = [
    { id: 'room_is_sharing', label: 'Shared Room', icon: <Share2 size={20} />, desc: 'Multiple tenants sharing' },
    { id: 'room_ac', label: 'Air Conditioning', icon: <Wind size={20} />, desc: 'Equipped with AC' },
    { id: 'room_commodity_bills', label: 'Bills Included', icon: <DollarSign size={20} />, desc: 'Includes utilities' },
    { id: 'room_waiting_list', label: 'Waiting List', icon: <Calendar size={20} />, desc: 'Enable waiting list' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((feature) => (
        <div key={feature.id} className={`border p-4 rounded-lg ${formData[feature.id] ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id={feature.id}
              name={feature.id}
              checked={formData[feature.id]}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor={feature.id} className="ml-2 font-medium flex-grow cursor-pointer">{feature.label}</label>
            <div className="text-blue-500">{feature.icon}</div>
          </div>
          <p className="mt-2 text-sm text-gray-500">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}

/** Media Tab */
function MediaTab({ images, videos, errors, handleImageUpload, handleVideoUpload, removeImage, removeVideo }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Room Images <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
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
        {errors.images && <p className="mt-1 text-sm text-red-600">{errors.images}</p>}
        {images.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src="/api/placeholder/300/300"
                  alt={`Preview ${index}`}
                  className="w-full aspect-square object-cover rounded-lg border"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <p className="text-xs text-center mt-1 truncate">{image.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Room Videos (Optional)</label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
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
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="flex items-center p-3 border rounded-lg bg-gray-50">
                <Video size={24} className="text-purple-600" />
                <div className="ml-3 flex-grow truncate">
                  <p className="text-sm font-medium">{video.name}</p>
                  <p className="text-xs text-gray-500">{(video.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
                <button
                  onClick={() => removeVideo(index)}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
/** Availability Tab */
function AvailabilityTab({ formData, handleChange }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Next Available Date</label>
        <input
          type="date"
          name="room_next_availability"
          value={formData.room_next_availability}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Notice Period (days)</label>
        <input
          type="number"
          name="room_prior_notice_period"
          value={formData.room_prior_notice_period}
          onChange={handleChange}
          min="0"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="0"
        />
      </div>
    </div>
  );
}

// Main Component
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
    room_waiting_list: false,
  });

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('location');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    setImages((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const handleVideoUpload = (e) => {
    setVideos((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeVideo = (index) => {
    setVideos((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.room_address) newErrors.room_address = 'Address is required';
    if (!formData.room_price) newErrors.room_price = 'Price is required';
    if (formData.room_price && isNaN(formData.room_price)) newErrors.room_price = 'Price must be a number';
    if (images.length === 0) newErrors.images = 'At least one image is required';
    if (formData.room_longitude && (isNaN(formData.room_longitude) || +formData.room_longitude < -180 || +formData.room_longitude > 180)) {
      newErrors.room_longitude = 'Longitude must be between -180 and 180';
    }
    if (formData.room_latitude && (isNaN(formData.room_latitude) || +formData.room_latitude < -90 || +formData.room_latitude > 90)) {
      newErrors.room_latitude = 'Latitude must be between -90 and 90';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { ...formData, images, videos });
      setIsSubmitted(true);
    }
  };

  const handleFurnishingSelect = (option) => {
    setFormData((prev) => ({ ...prev, room_furnished: option }));
  };

  const resetForm = () => {
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
      room_waiting_list: false,
    });
    setImages([]);
    setVideos([]);
    setErrors({});
    setIsSubmitted(false);
    setActiveTab('location');
  };

  const tabs = [
    { id: 'location', label: 'Location', icon: <MapPin size={20} /> },
    { id: 'details', label: 'Details', icon: <Info size={20} /> },
    { id: 'features', label: 'Features', icon: <Home size={20} /> },
    { id: 'media', label: 'Media', icon: <Image size={20} /> },
    { id: 'availability', label: 'Availability', icon: <Calendar size={20} /> },
  ];

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Listing Submitted!</h2>
        <p className="text-gray-600 mb-8">Your room has been successfully listed.</p>
        <button onClick={resetForm} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Add Another Room</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Add New Room</h1>
        <p className="text-blue-100 mt-1">Fill in the details to list your room</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-b-xl shadow-lg">
        <nav className="flex overflow-x-auto border-b p-3 space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${activeTab === tab.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6">
          {activeTab === 'location' && (
            <LocationTab formData={formData} errors={errors} handleChange={handleChange} />
          )}
          {activeTab === 'details' && (
            <DetailsTab formData={formData} errors={errors} handleChange={handleChange} handleFurnishingSelect={handleFurnishingSelect} />
          )}
          {activeTab === 'features' && (
            <FeaturesTab formData={formData} handleChange={handleChange} />
          )}
          {activeTab === 'media' && (
            <MediaTab
              images={images}
              videos={videos}
              errors={errors}
              handleImageUpload={handleImageUpload}
              handleVideoUpload={handleVideoUpload}
              removeImage={removeImage}
              removeVideo={removeVideo}
            />
          )}
          {activeTab === 'availability' && (
            <AvailabilityTab formData={formData} handleChange={handleChange} />
          )}
          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={() => setActiveTab(tabs[Math.max(tabs.findIndex(t => t.id === activeTab) - 1, 0)].id)}
              className={`px-5 py-2 bg-gray-100 rounded-lg ${activeTab === tabs[0].id ? 'invisible' : 'hover:bg-gray-200'}`}
            >
              Previous
            </button>
            {activeTab === tabs[tabs.length - 1].id ? (
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700">
                Submit Listing
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setActiveTab(tabs[Math.min(tabs.findIndex(t => t.id === activeTab) + 1, tabs.length - 1)].id)}
                className="px-5 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
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