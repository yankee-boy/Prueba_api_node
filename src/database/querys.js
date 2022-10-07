import { createNewUsuarios } from "../controllers/usuarios.controller";


//QUERYS DE TABLE USUARIOS 
export const queries = {
    getAllUsuarios:'SELECT * FROM Usuarios',
    addNewUsuarios:'INSERT INTO Usuarios (usuario, nombre, clave) VALUES (@usuario, @nombre, @clave)',
    getUsuariosbyId: 'SELECT * FROM Usuarios Where id = @id',
    deleteUsuarios: 'DELETE FROM [BD_NMA].[dbo].[Usuarios] WHERE id = @id',
    getTotalUsuarios:'SELECT COUNT(*) FROM Usuarios',
    updateUsuariosById: 'UPDATE Usuarios SET usuario =  @usuario, nombre = @nombre, clave =  @clave WHERE id =  @id',
};