const { merge }=require("lodash");
const  resolver={};
const PersonnelResolver=require("./etudiants/etudiantResolver");
const resolvers=merge(resolver,PersonnelResolver);
module.exports=resolvers;