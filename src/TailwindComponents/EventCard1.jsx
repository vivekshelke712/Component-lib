import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{event.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Date:</span> {event.date}
          </div>
          <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
