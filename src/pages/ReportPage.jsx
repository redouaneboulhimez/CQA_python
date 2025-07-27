import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateReport } from "../services/api";

const ReportPage = () => {
  const [reportData, setReportData] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    setGenerating(true);
    setError("");
    
    try {
      // Simuler la génération d'un rapport
      // En production, vous utiliseriez : const report = await generateReport(analysisId);
      const mockReport = {
        id: "report-123",
        fileName: "example.js",
        generatedAt: new Date().toLocaleString(),
        summary: {
          totalLines: 150,
          complexity: "Moyenne",
          qualityScore: 85,
          issues: 3,
          suggestions: 5
        },
        details: [
          {
            category: "Complexité",
            score: 8,
            issues: ["Fonction trop longue détectée", "Nesting excessif"]
          },
          {
            category: "Maintenabilité",
            score: 9,
            issues: ["Nommage des variables améliorable"]
          },
          {
            category: "Performance",
            score: 7,
            issues: ["Boucle inefficace détectée"]
          }
        ]
      };
      
      setReportData(mockReport);
    } catch (err) {
      setError("Erreur lors de la génération du rapport");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Génération de Rapport</h1>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Retour à l'accueil
            </button>
          </div>

          {!reportData ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Générer un rapport d'analyse
              </h2>
              <p className="text-gray-600 mb-8">
                Créez un rapport détaillé de l'analyse de votre code
              </p>
              
              <button
                onClick={handleGenerateReport}
                disabled={generating}
                className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {generating ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Génération en cours...
                  </span>
                ) : (
                  "Générer le rapport"
                )}
              </button>
              
              {error && (
                <p className="text-red-500 mt-4">{error}</p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  ✅ Rapport généré avec succès
                </h3>
                <p className="text-green-700">
                  Généré le {reportData.generatedAt}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800">Lignes de code</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {reportData.summary.totalLines}
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800">Complexité</h4>
                  <p className="text-2xl font-bold text-yellow-600">
                    {reportData.summary.complexity}
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800">Score qualité</h4>
                  <p className="text-2xl font-bold text-green-600">
                    {reportData.summary.qualityScore}/100
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800">Problèmes</h4>
                  <p className="text-2xl font-bold text-red-600">
                    {reportData.summary.issues}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Détails par catégorie</h3>
                {reportData.details.map((detail, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">{detail.category}</h4>
                      <span className="text-lg font-bold text-blue-600">{detail.score}/10</span>
                    </div>
                    {detail.issues.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {detail.issues.map((issue, issueIndex) => (
                          <li key={issueIndex}>{issue}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  onClick={() => setReportData(null)}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Nouveau rapport
                </button>
                <button
                  onClick={() => navigate('/analysis')}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  Voir les analyses
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
