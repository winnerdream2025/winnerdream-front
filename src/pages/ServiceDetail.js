import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RegularServices } from '../data/services';

function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = RegularServices.find((s) => s.slug === slug);

  if (!service) {
    navigate('/home'); // 🔁 Redirection propre si service introuvable
    return null;
  }

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2 text-gray-800">
        {service.icon} {service.title}
      </h1>

      <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

      {service.features && (
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Fonctionnalités incluses :</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {service.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-4 mt-4">
        <Link
          to="/dashboard"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Prendre un rendez-vous
        </Link>
        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Obtenir un devis
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetail;







