const jwt = require("jsonwebtoken");
require("dotenv").config();
//const secretKey = process.env.JWT_SECRET;
const secretKey=process.env.JWT_SECRET;



const getUser = async (token) => {
  try {
    if (token) {
        
      const user = jwt.verify(token, secretKey);
      
      return user;
    }
    return null;
  } catch (error) {
    throw error;
  }  
};

const context = async ({ req, res }) => {
 
  if (req.body.operationName === "IntrospectionQuery") {
   
    return {};
  }
  
  if ( req.body.operationName === "SignUp" || req.body.operationName === "Login"
  ) {
    return {};
  }

  
  const token = req.headers.authorization || "";

  // try to retrieve a user with the token
  const user = await getUser(token);
 

  if (!user) {
    throw new Error("User is not Authenticated");
  }

 
  return  user ;
};

module.exports = context;
