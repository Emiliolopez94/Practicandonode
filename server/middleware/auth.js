const jwt = require('jsonwebtoken')


//
// Verificar Token//
//


let verificarToken = (req, res, next) =>{


    let token = req.get('token');


    jwt.verify(token, process.env.SEMILLA ,(err,decoded)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err: "Error.."
            })  
        }

        req.usuario = decoded.usuario;
        next();

    })  


}

////////////////////
//Verifica AdminRole
//
///////////////////


let verificaAdmin_Role = (req,res,next) =>{

    let usuario = req.usuario;
    
    if(usuario.role === "ADMIN_ROLE"){
        console.log("Bienvenido Gran Admin..");
        next();
    }else {

        return res.json({
            ok: false,
            err: {
                message: "El usuario no es Administrador"
            }
    
        })

    }


   






}



module.exports = {
    verificarToken,
    verificaAdmin_Role

}