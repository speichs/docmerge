const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const secret = process.env.jwt_secret;

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))
    const token = require('./middleware/authCheck')
    const users = require('./routes/users.js')
    const files = require('./routes/files.js');
    const share = require('./routes/share.js');

    app.use(bodyParser.json())
    app.use(cookieParser())

    app.use(token)
    app.use('/public', publicPath)
    app.use(files)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    app.use(users)
    app.use(share)


    app.use((req,res,next)=>{
      const token = req.cookies.token;
      if(token){
        jwt.verify(token, secret, (err, decoded)=>{
          if(err){
            res.clearCookie('token');
            return next(err);
          }
          req.user = decoded;
          next()
        })
      }else{
        next()
      }
    })

    app.use('*', (req,res,next)=>{
      console.log('you hit the route')
      res.sendFile(indexPath)
    })


    return app
  }
}
