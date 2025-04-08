import React from 'react';
import { useNavigate } from "react-router";
const reviewsData = [
  {
    id: 1,
    name: "Jenny Wilson",
    date: "Dec 10, 2024",
    rating: 5,
    comment: "Very nice and comfortable hotel, thank you for accompanying my vacation!",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "Guy Hawkins",
    date: "Dec 10, 2024",
    rating: 4,
    comment: "Very beautiful hotel, my family and I are very satisfied with the service!",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Esther Howard",
    date: "Dec 8, 2024",
    rating: 5,
    comment: "Exceptional experience! The staff was attentive and the amenities were top-notch.",
    avatar: "/api/placeholder/40/40"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <img
            src={review.avatar}
            alt={`${review.name}'s avatar`}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <p className="text-gray-800 font-medium">{review.name}</p>
            <p className="text-gray-500 text-sm">{review.date}</p>
          </div>
        </div>
        <div className="bg-green-500 text-white rounded-full px-3 py-1 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{review.rating}</span>
        </div>
      </div>
      <div>
        <p className="text-gray-600">{review.comment}</p>
      </div>
    </div>
  );
};
const Review = ({ reviews = reviewsData, avgRating = 4.8, totalReviews = 4981 }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <p className="text-xl font-bold text-gray-800 mr-2">Review</p>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-green-500 font-bold ml-1 mr-2">{avgRating}</span>
            <span className="text-gray-500">({totalReviews.toLocaleString()} reviews)</span>
          </div>
        </div>
        <div>
          <button onClick={() => { navigate("/room-details/reviews"); window.scrollTo(0, 0) }} className="text-green-500 font-medium">See All</button>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
export default function App() {
  return <Review />;
}