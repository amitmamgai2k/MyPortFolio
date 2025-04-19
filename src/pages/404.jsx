import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000020] text-white px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={60} className="text-yellow-400" />
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-yellow-400 text-[#000020] font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
