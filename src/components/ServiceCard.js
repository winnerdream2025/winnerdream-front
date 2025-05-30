import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-md transition">
    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">{icon} {title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

export default ServiceCard;
