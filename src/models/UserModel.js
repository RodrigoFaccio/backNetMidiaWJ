 
const  {Model, DataTypes}= require('sequelize');
const { static } = require('express');
const  bcrypt = require('bcryptjs');


class clientes extends Model{
    static init(sequelize){
        super.init({
            nome:DataTypes.STRING,
            cpf:DataTypes.STRING, 
            email:DataTypes.STRING,  
            telefone:DataTypes.STRING,  
            telefone2:DataTypes.STRING,  
            cep:DataTypes.INTEGER,  
            estado:DataTypes.STRING, 
            cidade:DataTypes.STRING,  
            bairro:DataTypes.STRING,  
            rua:DataTypes.STRING,  
            numero:DataTypes.STRING,
            complemento:DataTypes.STRING,
            numero:DataTypes.STRING,
            cep_comercial:DataTypes.STRING,
            estado_comercial:DataTypes.STRING,
            bairro_comercial:DataTypes.STRING,
            numero_comercial:DataTypes.STRING,
            complemento_comercial:DataTypes.STRING,
             senha:DataTypes.STRING,

            data_nascimento:DataTypes.DATEONLY,



            






            










            



        },{
            freezeTableName: true, 
            sequelize,
        });
        
        
    }
    static associate(models){
        this.hasMany(models.extratos,{foreignKey:'idusuariodebito',as:'debitos'});

        
       

    }
    
  
   

}
module.exports = clientes;