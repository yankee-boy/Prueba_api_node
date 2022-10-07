import { Router } from "express";
import {createNewUsuarios, deleteUsuariosById, getTotalUsuarios, getUsuarios, getUsuariosById, updateUsuariosById } from "../controllers/usuarios.controller";

const router = Router()
//crud Usuarios
router.get('/Usuarios', getUsuarios);

router.post('/Usuarios', createNewUsuarios);

router.get('/Usuarios/count', getTotalUsuarios);

router.get('/Usuarios/:id',getUsuariosById);

router.delete('/Usuarios/:id', deleteUsuariosById);

router.put('/Usuarios/:id',  updateUsuariosById);



export default router