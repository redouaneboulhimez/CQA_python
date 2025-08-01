import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../services/api";
import { useNotification } from "../context/NotificationContext";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const handleDrop = (e) => {
    e.preventDefault();
    setError("");
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleChange = (e) => {
    setError("");
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Veuillez sélectionner un fichier.");
      showNotification("Veuillez sélectionner un fichier.", "error");
      return;
    }
    setUploading(true);
    try {
      const result = await uploadFile(file);
      navigate("/analysis", { state: { fileData: result } });
      showNotification("Fichier uploadé avec succès !", "success");
    } catch (err) {
      setError("Erreur lors de l'upload.");
      showNotification("Erreur lors de l'upload.", "error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Zone de dépôt avec plus de padding et d'espacement */}
      <div
        className="w-80 border-2 border-dashed border-gray-300 hover:border-blue-400 transition p-8 rounded-xl text-center cursor-pointer mb-20"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current.click()}
      >
        <input
          type="file"
          ref={inputRef}
          className="hidden"
          onChange={handleChange}
          accept=".js,.py,.java,.cpp,.ts,.tsx,.jsx,.c,.cs,.rb,.go,.php,.html,.css"
        />
        <p className="text-gray-600">
          Glissez-déposez un fichier ici ou{" "}
          <span className="text-blue-600 underline hover:text-blue-800">
            cliquez pour sélectionner
          </span>
        </p>

        {file && (
          <div className="mt-3 text-green-600 font-medium">
            Fichier sélectionné : {file.name}
          </div>
        )}
        {error && (
          <div className="mt-3 text-red-500 font-medium">
            {error}
          </div>
        )}
      </div>

      {/* Bouton séparé sous la zone */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Upload en cours..." : "Uploader"}
      </button>
    </div>
  );
};

export default FileUploader;