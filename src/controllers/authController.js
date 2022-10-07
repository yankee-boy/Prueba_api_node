const conexion = require('../database/connection')
const jwt = require('jsonwebtoken')
const bcryptrequire = require('bcryptjs')
const {promisify} = require('util')
const { restart } = require('nodemon')


exports.login = async(req, res) =>{
    try{
      const user = req.body.user 
      const password = req.body.password
      
      if(!user || !password){
        res.render('login',{
            alert:true,
            alertTitle: "Advertencia",
            alertMessage: "Ingrese un usuario y contraseña",
            alertIcon:'info',
            showConfirmButton: true,
            timer: false,
            ruta:'login'
        })
      }else{
        conexion.query('SELECT * FROM Usuarios WHERE usuario = ?', [user], async (error, results)=>{
          if( results.leght == 0 || ! (await bcrypts.compare(password, results[0].password)) ){
          res.render('login',{
            alert:true,
            alertTitle: "Advertencia",
            alertMessage: "Ingrese un usuario y contraseña",
            alertIcon:'info',
            showConfirmButton: true,
            timer: false,
            ruta:'login'
          })

        }else{
          //inicio de sesion ok
          const id = results[0].id
          const token = jwt.sign({id:id}, procees.env.JWT_SECRETO,{
            expiresIn: process.env.JWT_TIEMPO_EXPIRA
          })
          console.log("TOKEN: "+token+" para el USUARIO: "+user)

          const cookiesOptions = {
            expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRA * 24 * 60 * 1000),
            httpOnly: true
          }
          res.cookie('jws', token, cookiesOptions)
          res.render('login',{
            alert:true,
            alertTitle: "Conexion exitosa",
            alertMessage: "LOGIN CORRECTO",
            alertIcon:'success',
            showConfirmButton: true,
            timer: 800,
            ruta:''
        })
      }
      })
    } 
    } catch (error){
      console.log(error)

    }

}

