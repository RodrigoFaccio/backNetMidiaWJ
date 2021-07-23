const User  = require('../models/UserModel');


const jwt  = require('jsonwebtoken');
const auth = require('../config/auth.json');




module.exports={
    async login(req,res){
          const {email,senha} = req.body; 
          if(!email || !senha){
              return res.status(401).json('Preencha todos os campos');
          }

          const userResult  = await User.findOne({where:{email}});
          if(!userResult){
            return res.status(401).json('Usuário não existe');
          }
          
          console.log(userResult.senha)
          if(senha!=userResult.senha){
            return res.status(401).json('Senha invalida');
          }
          const {id}=userResult;
          const token  = jwt.sign({ id,email },auth.secret,{
              expiresIn: auth.day,
          });

          const dadosUsuario = await User.findByPk(id);
          return res.json({
            token,
            dadosUsuario
           
          });

    },
    

}

   
  
