import { restart } from "nodemon";
import { getConnection, sql, queries } from "../database";


//Listar usuarios
export const getUsuarios = async (req,res) => {
  try{
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllUsuarios);
    res.json(result.recordset);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }     
};

//Crear usuarios
export const createNewUsuarios = async (req, res) => {

    const {usuario, nombre, clave} = req.body;

    if ((usuario == null || nombre == null || clave == null )){
        return res.status(400).json({msg:"Falla en respuesta: Por favor rellene todos los campos"})
    }

    try{
        const pool = await getConnection();

        await pool.request()
        .input("usuario", sql.VarChar, usuario)
        .input("nombre", sql.VarChar, nombre)
        .input("clave", sql.VarChar, clave)
        .query(queries.addNewUsuarios)
    
        res.json('Nuevos usuarios');

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

//Traer usuarios por ID
export const getUsuariosById = async (req, res) =>{
  const {id} = req.params;

  const pool = await getConnection();
  const result =  await pool.request().input("id", id).query(queries.getUsuariosbyId)

  
  res.send(result.recordset[0]);
};

//Eliminar usuarios
export const deleteUsuariosById = async (req, res) =>{
  const {id} = req.params;

  const pool = await getConnection();
  const result =  await pool.request().input("id", id).query(queries.deleteUsuarios)

  
  res.sendStatus(204);
};

//Contar Usuarios
export const getTotalUsuarios = async (req, res) =>{
  const pool = await getConnection();
  const result =  await pool.request().query(queries.getTotalUsuarios);

  res.json(result.recordset[0]['']);
};


//Actualizar usuarios
export const updateUsuariosById = async (req, res) => {

  const { usuario, nombre, clave } = req.body;
  const {id} = req.params

  if ((usuario == null || nombre == null || clave == null )){
      return res.status(400).json({msg:"Falla en respuesta: Por favor rellene todos los campos"});      
  }

  const pool = await getConnection();
  await pool.request()
  .input("usuario", sql.VarChar, usuario)
  .input("nombre", sql.VarChar, nombre)
  .input("clave", sql.VarChar, clave)
  .input("id", sql.Int, id)
  .query(queries.updateUsuariosById);

  res.json({ usuario, nombre, clave });
};
