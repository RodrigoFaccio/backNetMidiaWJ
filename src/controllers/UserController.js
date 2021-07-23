const User  = require('../models/UserModel');



module.exports={
    async list(req,res){
        const usuario = await User.findAll();

        res.json(usuario);
         
         

        

    },

    async perfilUsuario(req,res){
        const {id_user} = req.params;

        const usuario = await User.findByPk(id_user);

        res.json(usuario);
    },


    async cadastro(req,res){
        const {nomecompleto,celular,email,senha,
            identidade,identidadefiscal,genero,endereco,bairro,
            numero,provincia}= req.body;

            const user = await User.create({nomecompleto,celular,email,senha,
                identidade,identidadefiscal,genero,endereco,bairro,
                numero,provincia})


                res.json(user);
    }
  
}
