import React from 'react';

function ProductCard({ name, price }) {
  return (
    <div className="bg-white border rounded shadow p-4 text-center">
      <div className="h-32 bg-gray-100 mb-4 flex items-center justify-center">
        <span className="text-gray-400">Image</span>
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{price}</p>
      <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
        Voir
      </button>
    </div>
  );
}

export default ProductCard;


