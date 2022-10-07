import sql from 'mssql'
import config from '../config';

const dbSetting = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true, 
        trustServerCertificate: true,
    },   
};

 export async function getConnection(){
    try{
    const pool = await sql.connect(dbSetting);
    return pool;
    }catch(error){
        console.error(error)
    }
}

export {sql};