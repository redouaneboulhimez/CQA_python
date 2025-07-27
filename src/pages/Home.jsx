import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Analyseur de Code
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Analysez la qualité de votre code et générez des rapports détaillés
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/upload"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            📁 Uploader un fichier
          </Link>
          
          <Link
            to="/analysis"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            📊 Voir les analyses
          </Link>
          
          <Link
            to="/report"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            📋 Générer un rapport
          </Link>
          
          <div className="bg-gray-200 text-gray-600 font-semibold py-4 px-6 rounded-lg">
            🚀 Fonctionnalités avancées
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>Formats supportés : .js, .py, .java, .cpp, .ts, .tsx, .jsx, .c, .cs, .rb, .go, .php, .html, .css</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
