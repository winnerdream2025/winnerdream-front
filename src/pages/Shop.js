import React, { useEffect, useState } from 'react';
import { getAllProducts as getProducts } from '../services/ShopService';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { shopItems } from '../data/shopItems';

function Shop() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Boutique WinnerDream</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopItems.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-1">{item.category} - {item.type}</p>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-green-600 font-bold text-lg mb-4">{item.price} €</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Acheter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
 
