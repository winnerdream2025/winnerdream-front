import React from 'react';

function MyWebsite({ user }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Mes sites web</h2>
      <p className="text-gray-600">Aucun site actif pour l’instant.</p>
      {/* Ici, tu pourras afficher les sites créés avec leurs statuts */}
    </div>
  );
}

export default MyWebsite;

