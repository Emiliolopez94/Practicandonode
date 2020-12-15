//================ CONFIGURACION
// PUERTOS

process.env.PORT = process.env.PORT || 3000

//////////////
// Vencimiento
// 60 seg
// 60 min
//24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60*60 * 24 * 30;

/////////////
//Semilla

process.env.SEMILLA = process.env.SEMILLA || 'SECRETOOO';

//ENTORNO

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


//BASEDE DATOS

let urlDB;

//if(process.env.NODE_ENV === 'dev'){
//    urlDB = "mongodb://localhost:27017/cafe"
//}else{

    urlDB= "mongodb+srv://operaci:operaci@cluster0.0fso4.mongodb.net/cafe?retryWrites=true&w=majority"
    
//}



process.env.URLDB= urlDB

