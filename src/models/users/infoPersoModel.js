const mongoose = require('mongoose');

// Schéma des informations personnelles de l'étudiant
const informationPersonnelleSchema = new mongoose.Schema({
  profile:{
    type:String,
  },
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'LumenUser', 
    required:true,
 },
  dateNaissance: {
    type: String,
  },
  profile:{
    type:String
  },
  adresse: {
    type: String,
  },
  codePostal: {
    type: String,
  },
  ville: {
    type: String,
  },
  pays: {
    type: String,
  },
  numeroTelephone: {
    type: String,
  },
  sexe: {
    type: String,
    enum: ['Homme', 'Femme', 'Autre'],
  },
  nationalite: {
    type: String,
  },
  profession: {
    type: String,
  },
  langueMaternelle: {
    type: String,
  },
  diplomePrecedent: {
    type: String,
  },
  statutFamilial: {
    type: String,
  },
 
});

const InformationPersonnelle = mongoose.model('InformationPersonnelle', informationPersonnelleSchema);

module.exports = InformationPersonnelle;