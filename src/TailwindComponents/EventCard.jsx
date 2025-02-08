import React from 'react';

const EventCard = () => {
  const event = {
    title: 'Tech Conference 2025',
    date: 'January 25, 2025',
    location: 'San Francisco, CA',
    description: 'Join us for a day of insightful talks and networking with industry leaders.',
    image: 'https://via.placeholder.com/300x200',
  };

  return (
    
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{event.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{event.date}</p>
        <p className="text-sm text-gray-600 mt-1">{event.location}</p>
        <p className="text-gray-700 mt-2">{event.description}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
