const { gql } = require("apollo-server-express");

const EtudiantType = require("./etudiants/etudiantType");

const InfoPersoType = require("./users/infoPersoType");
const MatiereType = require("./matieres/matiereType");
const EnseignantType = require("./enseignants/enseignantType");
const UserType=require("./users/userType");
const CourseType=require("./cours/courseType");

module.exports = gql`
  type Query {
    getUserById(userId:String):User
    getAll: [Etudiant!]
    getUsers:[User]
    getById(id: String!): Etudiant!
    getAllMatiere: [Matiere!]
    findEnseignantById(id: String!): Enseignant!
    getEnseignants: [Enseignant!]
    


    #course
    getAllCourses:[Course!]!
    getSingle(id:String):Course!
  }
  type Mutation {
    upload(file:Upload):DemandeReponse
    addMatiereToChoice(userId:String,matiereId:String):DemandeReponse
    addEnsToMatiere(ensId:String,matiereId:String):DemandeReponse!
    signup(userData:UserInput):AuthPayload!
    login(loginData:loginInput):AuthPayload!
    creerCompte(data: EtudiantInput!): Etudiant!
    updateEtudiant(id: String!, data: EtudiantInput): Etudiant!
    saveInfo(data: InformationPersonnelleInput): InformationPersonnelle!
    updateInfo(
      id: String!
      data: InformationPersonnelleInput
    ): InformationPersonnelle!
    deleteEtudiantById(id: String): Etudiant!
   

    createMatiere(data: MatiereInput): Matiere!

    updateMatiere(id: String!, data: MatiereUpdateInput): Matiere!

    demandeEnseignant(data: CreerEnseignantInput): Enseignant!

    accepterDemandeEnseignement(enseignantId: String): DemandeReponse!

    refuserDemandeEnseignement(enseignantId: String!): DemandeReponse!

    #Course
    createCourse(data:CourseInput):Course!
    deleteCourse(id:String):Course
    updateCourse(
      id:String,
      data:CourseUpdateInput
    ):Course!
  }
  ${EtudiantType}
  ${InfoPersoType}
  ${MatiereType}
  ${EnseignantType}
  ${UserType}
  ${CourseType}
`;
