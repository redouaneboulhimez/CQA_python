import React from "react";
import FileUploader from "../components/FileUploader";

const UploadPage = () => (
  <div className="max-w-xl mx-auto mt-10">
    <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Uploader un fichier</h1>
    <FileUploader />
  </div>
);

export default UploadPage;
