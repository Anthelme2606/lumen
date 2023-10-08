const EtudiantService=require("../../../services/etudiants/etudiantService");
const EtudiantResolvers={

    Query:{
getAll:async()=>{
    return EtudiantService.getAll();
}
    },
    Mutation:{
creerCompte:async (_,{data}) =>{
    return await EtudiantService.creerCompte