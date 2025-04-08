import React from "react";
import { AlertCircle } from "lucide-react";

const Error = ({ message }) => {
   return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
         <div className="flex items-center p-6 bg-white border border-red-200 rounded-lg shadow-md max-w-md">
            <div className="flex-shrink-0 mr-4">
               <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <div>
               <h3 className="text-lg font-semibold text-red-600">Error</h3>
               <p className="mt-1 text-sm text-gray-700">{message}</p>
            </div>
         </div>
      </div>
   );
};

export default Error;
