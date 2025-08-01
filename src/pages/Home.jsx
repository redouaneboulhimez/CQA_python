import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Titre principal */}
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          🧠 Analyseur de Code
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Analysez la qualité de votre code et générez des rapports détaillés.
        </p>

        {/* Liens d'action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/upload"
            className="no-underline bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 w-full"
          >
            📁 Uploader un fichier
          </Link>

          <Link
            to="/analysis"
            className="no-underline bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 w-full"
          >
            📊 Voir les analyses
          </Link>

          <Link
            to="/report"
            className="no-underline bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 w-full"
          >
            📋 Générer un rapport
          </Link>

          <div className="bg-yellow-100 text-yellow-800 font-medium py-4 px-6 rounded-lg shadow-sm w-full">
            🚀 Fonctionnalités avancées (à venir)
          </div>
        </div>

        {/* Formats supportés */}
        <div className="mt-12 text-sm text-gray-600">
          <p className="italic">
            <span className="font-semibold">Formats supportés :</span> .js, .py, .java, .cpp, .ts, .tsx, .jsx, .c, .cs, .rb, .go, .php, .html, .css
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
