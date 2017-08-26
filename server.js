const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const secret = process.env.jwt_secret;


module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))
    const token = ('./middleware/authCheck.js')


    app.use(bodyParser.json())
    app.use(cookieParser())

    app.use(token)

    app.use((req,res,next)=>{
      const token = req.cookies.token;
      if(token){
        jwt.verify(token, secret, (err, decoded)=>{
          if(err){
            res.clearCookie('token');
            return next(error);
          }
          req.user = decoded;
          next()
        })
      }else{
        next()
      }
    })

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
