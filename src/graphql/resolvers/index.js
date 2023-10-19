const { merge }=require("lodash");
const  resolver={};
const EtudiantResolver=require("./etudiants/etudiantResolver");
const InfoPersonnelleResolver=require("./users/infoPersoResolver");
const MatiereResolver=require("./matieres/matiereResolver");
const DemandeEnsResolver=require("./enseignants/demandeEnsResolver");
const UserResolver=require("./users/userResolver");
const CourseResolver=require("./cours/coursResolver");

const resolvers=merge(resolver,
    EtudiantResolver,

    InfoPersonnelleResolver,

    MatiereResolver,

    DemandeEnsResolver,
    UserResolver,
    CourseResolver,



    );
module.exports=resolvers;