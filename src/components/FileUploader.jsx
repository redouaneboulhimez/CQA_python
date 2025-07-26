import React, { useRef, useState } from "react";
import { uploadFile } from "../services/api";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef();

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
      return;
    }
    setUploading(true);
    try {
      await uploadFile(file);
      // Rediriger ou afficher un message de succès
    } catch (err) {
      setError("Erreur lors de l'upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="border-2 border-dashed rounded-lg p-6 text-center bg-white dark:bg-gray-800"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => inputRef.current.click()}
      style={{ cursor: "pointer" }}
    >
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
        accept=".js,.py,.java,.cpp,.ts,.tsx,.jsx,.c,.cs,.rb,.go,.php,.html,.css"
      />
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Glissez-déposez un fichier ici ou <span className="underline">cliquez pour sélectionner</span>
      </p>
      {file && (
        <div className="mb-2 text-green-600 dark:text-green-400">
          Fichier sélectionné : {file.name}
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? "Upload en cours..." : "Uploader"}
      </button>
    </div>
  );
};

export default FileUploader;
