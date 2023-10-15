const UserRepository =require("../../repositories/users/userRepository");
const Generator=require("../../publics/functions/generator");
const InformationPersonnelleRepository=require("../../repositories/users/infoPersoRepository");
const secretKey=process.env.JWT_SECRET;

const jwt=require("jsonwebtoken");

class UserService {
static async create(userData)
{
   try{
   const complet=userData.nom + userData.prenom;
   const  email=userData.email;
   const username= await Generator.generateUsername(complet,email);
   userData.username=username;
  
   userData.dateInscription= await Generator.formatDateInscription(new Date());
   const user= await UserRepository.create(userData);
   const token =  jwt.sign({user}, secretKey, {
    expiresIn: "1h",
  });
   return {token,user};

   }catch(error)
   {
    throw error;
   }
    


}
static async login(loginData)
{
    const user=await UserRepository.login(loginData);
    const token =  jwt.sign({user}, secretKey, {
        expiresIn: "1h",
      });
      console.log(user);
    return {token,user};
}
static async getInfoPerso(id)
    {
  return await InformationPersonnelleRepository.getByUser(id);
    }









}
module.exports=UserService;