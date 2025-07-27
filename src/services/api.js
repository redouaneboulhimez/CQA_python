const API_BASE_URL = 'http://localhost:5173/api'; // Ajustez selon votre backend

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Erreur lors de l\'upload');
  }

  return response.json();
};

// Fonction pour récupérer les résultats d'analyse
export const getAnalysisResults = async (fileId) => {
  const response = await fetch(`${API_BASE_URL}/analysis/${fileId}`);
  
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des résultats');
  }
  
  return response.json();
};

// Fonction pour générer un rapport
export const generateReport = async (analysisId) => {
  const response = await fetch(`${API_BASE_URL}/report/${analysisId}`, {
    method: 'POST',
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la génération du rapport');
  }
  
  return response.json();
};
