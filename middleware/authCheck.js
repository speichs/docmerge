const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const kenx = require('kenx');
const secret = process.env.jwt_secret;
const router = express.Router();

// router.get('/token', (req,res,next)=>{
//   const token = req.cookies
// })



router.post('/token', (req, res, next)=>{
  const email = req.body.email;
  const password = req.body.password;
  if(!email){
    return res.status(400)
    .set({ 'Content-Type': 'pain/text'})
    .send('Email must not be blank');
  }else if(!password){
    return res.status(400)
    .set({ 'Content-Type': 'pain/text'})
    .send('Password must not be blank');
  }

  knex('users')
  .where('email', email)
  .then( user => {
    const hashedPassword = user[0].hashedPassword;

    if(bcrypt.compareSync(password, hashedPassword)){
      const userInfo = {
        id: user[0].id,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email
      };
      const token = jwt.sign(userInfo, secret);
      res.cookie('token', token)
    }


  })

})
