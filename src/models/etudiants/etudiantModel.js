const mongoose = require('mongoose');

const etudiantSchema = new mongoose.Schema({
  nomComplet: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  motDePasse: {
    type: String,
    required: true,
  },
  dateInscription:{
    type:String,
  },
});

const Etudiant = mongoose.model('Etudiant', etudiantSchema);

module.exports = Etudiant;