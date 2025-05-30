import { Link } from 'react-router-dom';

function PlanCard({ title, price, features, type }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-green-600 font-semibold text-lg mb-3">{price} €/mois</p>

      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <Link
        to={`/website-plans/${type}`}
        className="inline-block bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Explorer
      </Link>
    </div>
  );
}

export default PlanCard;


