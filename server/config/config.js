//================ CONFIGURACION
// PUERTOS

process.env.PORT = process.env.PORT || 3000



//ENTORNO

process.env.NODE_ENV = process.env.NODE_EN || 'dev'


//BASEDE DATOS

let urlDB;

//if(process.env.NODE_ENV === 'dev'){
//    urlDB = "mongodb://localhost:27017/cafe"
//}else{

    urlDB= "mongodb+srv://operaci:operaci@cluster0.0fso4.mongodb.net/cafe"
    
//}

process.env.urlDB= urlDB

