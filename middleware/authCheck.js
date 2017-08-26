'use strict'

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const secret = process.env.SECRET;
const router = express.Router();

// router.get('/token', (req,res,next)=>{
//   const token = req.cookies
// })



router.post('/token', (req, res, next) => {
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
    let bool = bcrypt.compareSync(password, hashedPassword);
    console.log(bool);
    if(bool){
      console.log('inside');
      const userInfo = {
        id: user[0].id,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email
      };
      console.log(userInfo);
      console.log(secret);
      const token = jwt.sign(userInfo, secret);
      res.cookie('token', token, {
        httpOnly:true
      }).send(userInfo)
    }else {
      res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('Bad email or password');
    }
  }).catch(() => {
    res.status(400)
    .set({ 'Content-Type': 'plain/text' })
    .send('Bad email or password');
    });

});

module.exports = router;
