import express from 'express';
import config  from './config';
import UsuariosRoutes from './routes/Usuarios.routes';
import dontenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './routes/Usuarios.routes';
import routes from './routes/router';


//Creacion de constante app
const app = express();

//setting de puertos
app.set('port', config.port);


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// motor de plantillas ejs
app.set('views', 'C:/Users/user/Desktop/Prueba_api_node/src/views'); // arreglar el llamado de views
app.set('view engine', 'ejs');


// usar cookies
app.set(cookieParser);

//rutas 
app.get('/login', (req,res)=>{
    res.render('login');
});

//llamar al router
app.use(routes)


//usuarios routes
app.use(UsuariosRoutes);




//exportacion de app
export default app;