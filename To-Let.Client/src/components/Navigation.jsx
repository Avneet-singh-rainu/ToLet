import React from "react";
import { ArrowLeft, Bell } from "lucide-react";

const Navigation = ({ title, onBackClick, onNotificationClick }) => {
  return (
    <div className="flex  items-center justify-between p-4 border-b border-gray-100 bg-gray-50 shadow-sm">
      {/* Back Button */}
      <div className="flex items-center">
        <button
          onClick={onBackClick}
          className="mr-4 cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200"
          aria-label="Go back"
        >
          <ArrowLeft size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Title centered */}
      <div className="flex-1 text-center">
        <h1 className="text-lg font-medium text-gray-700">{title}</h1>
      </div>

      {/* Notification Button */}
      <div className="relative">
        <button
          onClick={onNotificationClick}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
          aria-label="Notifications"
        >
          <Bell size={22} strokeWidth={1.5} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
