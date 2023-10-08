const EtudiantModel = require("../../models/etudiants/etudiantModel");
class EtudiantRepository {


    static async creerCompte(data) {
        try {
            const nouvelEtudiant = new EtudiantModel(data);
            await nouvelEtudiant.save();
            return nouvelEtudiant;
        } catch (erreur) {
            throw erreur;
        }

    }

    static async getByUsername(usernameFind) {
        try {
            const usernames = await EtudiantModel.findOne({ username: usernameFind });

            return usernames
        } catch (erreur) {
            throw erreur;
        }
    }


    static async getById(id) {
        try {