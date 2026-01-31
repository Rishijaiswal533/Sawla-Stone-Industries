import React, { useState } from 'react';

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.983475711856!2d75.9808458!3d24.6534229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39656c907f4eeb4b%3A0x7e0c9436d6bb379a!2sSawla%20Stone%20Industries!5e1!3m2!1sen!2sin!4v1762588228263!5m2!1sen!2sin";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Outer container with 5% margin around the map */}
      <div
        className="bg-white shadow-2xl rounded-xl overflow-hidden transform transition-all duration-300"
        style={{
          width: '92%', // 100% - (5% left + 5% right)
          margin: '4%', // Adds 5% top, right, bottom, left margin
          maxWidth: '12000px'
        }}
      >
        {/* Map Container */}
        <div className="relative w-full" style={{ height: '70vh', minHeight: '300px' }}>
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-indigo-600 z-10">
              <svg
                className="animate-spin h-8 w-8 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0
                  c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p className="mt-2 text-sm font-medium">Loading map...</p>
            </div>
          )}

          {/* Google Maps Iframe */}
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-b-xl"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
