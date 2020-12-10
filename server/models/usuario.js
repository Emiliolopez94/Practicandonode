const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let RolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} No es un ROL VALIDO'

}

let Schema = mongoose.Schema;


let usuarioSchema = new Schema({


    nombre:{

        type: String,
        required: [true,'El nombre es OBLIGATORIO']
 
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es OBLIGATORIO']
    },
    password: {
        type: String,
        require: [true, 'La clave es OBLIGATORIA']
    },
    
    img:{
        type: String,
        required: false

    },
    role:{
        type: String,
        default: 'USER_ROLE',
        enum: RolesValidos
        
    },
    estado:{
        type: Boolean,
        default: true,
    },
    google:{
        type: Boolean,
        default: 'false'
    }



}
);

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}   


usuarioSchema.plugin(uniqueValidator, {
message: '{PATH} debe ser unico..'

})

module.exports = mongoose.model( 'usuario', usuarioSchema )


