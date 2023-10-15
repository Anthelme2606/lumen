const { merge }=require("lodash");
const  resolver={};
const EtudiantResolver=require("./etudiants/etudiantResolver");
const InfoPersonnelleResolver=require("./users/infoPersoResolver");
const MatiereResolver=require("./matieres/matiereResolver");
const EnseignantResolver=require("./enseignants/enseignantResolver");
const UserResolver=require("./users/userResolver");
const CourseResolver=require("./cours/coursResolver");

const resolvers=merge(resolver,
    EtudiantResolver,

    InfoPersonnelleResolver,

    MatiereResolver,

    EnseignantResolver,
    UserResolver,
    CourseResolver,



    );
module.exports=resolvers;