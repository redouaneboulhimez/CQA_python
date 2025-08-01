import React from "react";
import FileUploader from "../components/FileUploader";

const UploadPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        📁 Uploader un fichier
      </h1>
      <FileUploader />
    </div>
  </div>
);

export default UploadPage;
