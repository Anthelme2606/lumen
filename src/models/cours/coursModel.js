const mongoose = require('mongoose');

// Schéma du modèle de cours
const coursSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fichier:{
    type:String,
  },
  enseignant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Enseignant', 
    required: true,
  },
});

const Cours = mongoose.model('Cours', coursSchema);

module.exports = Cours;