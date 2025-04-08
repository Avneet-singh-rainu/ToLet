import React, { useState } from 'react';
import { ArrowLeft, Circle } from 'lucide-react';
import { useNavigate } from 'react-router';
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
        name: "Kristin Watson",
        date: "Dec 09, 2024",
        rating: 5,
        comment: "The rooms are very comfortable and the natural views are amazing, can't wait to come back again!",
        avatar: "/api/placeholder/40/40"
    },
    {
        id: 4,
        name: "Darrell Steward",
        date: "Dec 08, 2024",
        rating: 5,
        comment: "Extraordinary! I am very happy with the facilities and services provided! Highly recommended!",
        avatar: "/api/placeholder/40/40"
    }
];

const RatingFilter = ({ activeFilter, setActiveFilter }) => {
    const filters = [
        { label: 'All', value: 'all' },
        { label: '5', value: 5 },
        { label: '4', value: 4 },
        { label: '3', value: 3 },
        { label: '2', value: 2 },
    ];

    return (
        <div className="flex gap-2 mb-4 overflow-x-auto">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    className={`flex items-center px-4 py-1 rounded-full text-sm ${activeFilter === filter.value
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-800 text-gray-400'
                        }`}
                    onClick={() => setActiveFilter(filter.value)}
                >
                    {filter.value === 'all' ? null : null}
                    <span>{filter.label}</span>
                </button>
            ))}
        </div>
    );
};

const StarDisplay = ({ filled = true }) => (
    <svg
        className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 mb-3">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <img
                        src={review.avatar}
                        alt={`${review.name}'s avatar`}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <div>
                        <p className="text-white font-medium text-sm">{review.name}</p>
                        <p className="text-gray-400 text-xs">{review.date}</p>
                    </div>
                </div>
                <div className="bg-green-500 text-white rounded-full px-3 py-1 flex items-center text-xs">
                    <StarDisplay filled={true} />
                    <span className="ml-1">{review.rating}</span>
                </div>
            </div>
            <div>
                <p className="text-gray-300 text-sm">{review.comment}</p>
            </div>
        </div>
    );
};

const Review = ({ reviews = reviewsData, avgRating = 4.8, totalReviews = 4981 }) => {
    const [activeFilter, setActiveFilter] = useState('all');
    const navigate = useNavigate();

    const filteredReviews = activeFilter === 'all'
        ? reviews
        : reviews.filter(review => review.rating === activeFilter);

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <ArrowLeft onClick={() => navigate("/room-details/1")} className="w-5 h-5 text-white mr-2" />
                    <p className="text-lg font-medium text-white">Review</p>
                </div>
                <Circle className="w-5 h-5 text-white" />
            </div>

            {/* Rating Filters */}
            <RatingFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            {/* Rating Summary */}
            <div className="flex items-center mb-4">
                <p className="text-sm font-medium text-white mr-2">Rating</p>
                <div className="flex items-center">
                    <StarDisplay filled={true} />
                    <span className="text-yellow-400 font-bold ml-1 mr-1 text-sm">{avgRating}</span>
                    <span className="text-gray-400 text-xs">({totalReviews.toLocaleString()} reviews)</span>
                </div>
            </div>

            {/* Reviews List */}
            <div className="flex flex-col gap-3">
                {filteredReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default function App() {
    return <Review />;
}