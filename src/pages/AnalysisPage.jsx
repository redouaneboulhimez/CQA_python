import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAnalysisResults } from "../services/api";

const AnalysisPage = () => {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        // Si on a des données de fichier uploadé, on peut les utiliser
        if (location.state?.fileData) {
          setAnalysisData(location.state.fileData);
        } else {
          // Sinon, on peut récupérer les analyses existantes
          // const results = await getAnalysisResults();
          // setAnalysisData(results);
        }
      } catch (err) {
        setError("Erreur lors du chargement des analyses");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [location.state]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de l'analyse...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => navigate('/upload')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retour à l'upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Résultats d'Analyse</h1>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Retour à l'accueil
            </button>
          </div>

          {analysisData ? (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  ✅ Fichier analysé avec succès
                </h3>
                <p className="text-green-700">
                  {analysisData.fileName || "Fichier uploadé"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">Complexité</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {analysisData.complexity || "N/A"}
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800">Lignes de code</h4>
                  <p className="text-2xl font-bold text-yellow-600">
                    {analysisData.linesOfCode || "N/A"}
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800">Score qualité</h4>
                  <p className="text-2xl font-bold text-purple-600">
                    {analysisData.qualityScore || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => navigate('/report')}
                  className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
                >
                  Générer un rapport
                </button>
                <button
                  onClick={() => navigate('/upload')}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Analyser un autre fichier
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Aucune analyse disponible</p>
              <button
                onClick={() => navigate('/upload')}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Uploader un fichier
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
