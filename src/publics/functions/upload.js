const { createReadStream, createWriteStream } = require('fs');
const { ApolloError } = require('apollo-server-express');
const { v4: uuidv4 } = require('uuid');
const {parse,join}=require("path");
const fs=require("fs");
class Upload {
  static async upload(file) {
    try {
      const allowedExtensions = [
        'mp4',
        'avi',
        'mov',
        'mp3',
        'wav',
        'ogg',
        'flac',
        'mkv',
        'm4a',
        'webm',
        'pdf',
        'doc',
        'xls',
        'ppt',
        'jpg',
        'png',
        'gif',
        'zip',
        'txt',
        'csv',
        'jpg',
        'jpeg',

      ];
      const { filename, createReadStream } = await file;
      const fileExtension = filename.split('.').pop();
      
      if (!allowedExtensions.includes(fileExtension)) {
        throw new ApolloError('Extension de fichier non autorisée.');
      }

      // Créez un nom de fichier unique en utilisant UUID
      const uniqueFilename = `${uuidv4()}.${fileExtension}`;
      const path = `./publics/uploads/${uniqueFilename}`;

      // Gérer l'upload du fichier
      const writeStream = createWriteStream(path);

      await new Promise((resolve, reject) => {
        createReadStream()
          .pipe(writeStream)
          .on('finish', resolve)
          .on('error', (error) => {
            console.error(error);
            reject(error);
          });
      });

      return  uniqueFilename
    } catch (error) {
      throw new ApolloError('Erreur lors de l\'upload du fichier', 'FILE_UPLOAD_ERROR');
    }
  }

  static async readFile(file){
    const {createReadStream,filename}=await file;
    const stream=createReadStream();
    var {ext,name}=parse(file);
    name=`single${Math.floor((Math.random)* 1000+ 1)}`;
    let url=join(__dirname,`../uploads/${name}.${Date.now()}${ext}`);
    const imageStream =  createWriteStream(url);
     stream.pipe(imageStream);
     const baseUrl=process.env.BASE_URL;
     const port=process.env.PORT;
     return `${baseUrl}${port}${url.split('Upload')[1]}}`;

  }
}

module.exports = Upload;
