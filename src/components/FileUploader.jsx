import React, { useState, useRef } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    // Simuler un upload
    setTimeout(() => {
      alert(`Fichier ${file.name} uploadé avec succès ✅`);
      setUploading(false);
      setFile(null);
    }, 2000);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center">
      {/* Zone de dépôt */}
      <div
        className="w-80 border-2 border-dashed border-gray-300 hover:border-blue-400 transition p-8 rounded-xl text-center cursor-pointer mb-4 bg-gray-50"
        onClick={triggerFileInput}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept=".js,.py,.java,.cpp,.ts,.tsx,.jsx,.c,.cs,.rb,.go,.php,.html,.css"
          className="hidden"
        />
        <p className="text-gray-600">
          {file ? (
            <span className="text-green-600 font-semibold">{file.name}</span>
          ) : (
            <>
              Glissez-déposez un fichier ici ou{" "}
              <span className="text-blue-600 underline hover:text-blue-800">
                cliquez pour sélectionner
              </span>
            </>
          )}
        </p>
      </div>

      {/* Bouton upload */}
      <button
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
        onClick={handleUpload}
        disabled={!file || uploading}
      >
        {uploading ? "⏳ Upload en cours..." : "📤 Uploader"}
      </button>
    </div>
  );
};

export default FileUploader;
