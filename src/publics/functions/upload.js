const fs = require("fs");
const uploadDir = "./publics/uploads";
class FileUploader {
  static async uploadFile(file) {
    if (!file) {
      throw new Error("Aucun fichier téléchargé.");
    }
    const uniqueFileName = `${Date.now()}_${file.name}`;
    const uploadPath = `${uploadDir}/${uniqueFileName}`;

    try {
      await file.mv(uploadPath);
      return uploadPath;
    } catch (error) {
      throw new Error("Erreur lors du téléchargement du fichier.");
    }
  }
}

module.exports = FileUploader;
