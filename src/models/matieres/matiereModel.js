const mongoose = require('mongoose');

const matiereSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    description: String,
    enseignants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Enseignant',
        },
    ],
    niveauDifficulte: String,

    nombreEtudiantsInscrits: Number,

    dureeCours: String,

    prerequis: String,

    langueEnseignement: String,

    objectifsApprentissage: [String],

    coutAchat: {
        type: Number,
        required: true,
        min: 0,
    },
});

const Matiere = mongoose.model('Matiere', matiereSchema);

module.exports = Matiere;