import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 space-y-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">Thank You for Signing Up!</h1>
        <p className="text-center text-gray-600">
          Your details have been successfully submitted. We will get back to you soon.
        </p>
        <Link to="/" className="block py-2 font-bold text-center text-blue-500 hover:text-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
