const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid');

class FileUtil {
  static async saveFile(fileName, fileData) {
    try {
      
      const uniqueFileName = uuidv4() + path.extname(fileName);
      console.log(uniqueFileName);

      const targetPath = path.join(__dirname,'lumen','src','publics','uploads', uniqueFileName);
      

      fs.writeFileSync(targetPath, fileData);

      return uniqueFileName;
    } catch (erreur) {
      throw erreur;
    }
  }

  static async fileControl(file) {
    try {
     
      const allowedExtensions = ['.png', '.jpg', '.jpeg', '.pdf', '.txt', '.docx'];
    
      const extname = path.extname(file.originalname).toLowerCase();

      if (!allowedExtensions.includes(extname)) {
        throw new Error('Extension de fichier non autorisée');
      }

      const uniqueFileName = uuidv4() + extname;

      return uniqueFileName;
    } catch (erreur) {
      throw erreur;
    }
  }
}

module.exports = FileUtil;
