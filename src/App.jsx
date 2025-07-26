import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Page d'upload de test (à remplacer par ton vrai composant plus tard)
function UploadPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-600">Page d’upload</h2>
      {/* Ajoute ici ton composant FileUploader plus tard */}
    </div>
  );
}

function App() {
 

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">✅ Tailwind fonctionne !</h1>
        <Link
          to="/upload"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
        >
          Aller à l’upload
        </Link>
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
        <p className="mt-4 text-gray-600">
          Modifie <code>App.jsx</code> pour continuer 🚀
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App
