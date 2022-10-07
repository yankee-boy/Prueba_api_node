import { Router } from 'express'
const router = Router()

const authController = require ('../controllers/authController')

//router para las vistas
router.get('/login', (req,res)=>{
    res.render('login',{alert:false})
})

router.get('/registrar', (req,res)=>{
    res.render('registrar')
})

//router para los metodos del controller
router.post('/login', authController.login)

export default router