const mongoose = require('mongoose');

const enseignantSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  matieres: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Matiere',
    },
],
  numeroTelephone: String,
  diplomesCertifications: [String],
  experienceEnseignement: String,
  curriculumVitae: String, 
  lettreMotivation: String,
  domainesExpertise: [String],
  /*materielPedagogique: [String],
  referencesProfessionnelles: [String],
  exempleCoursPropose: String,*/
  casierJudiciaire: String, 
  demandeAcceptee: {
    type:Boolean,
    default:false,
  }, 
});

const Enseignant = mongoose.model('Enseignant', enseignantSchema);

module.exports = Enseignant;