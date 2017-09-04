'use strict'
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const secret = process.env.SECRET;
const router = express.Router();

router.post('/token', (req, res, next) => {
  const { email, password } = req.body
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
  .then( result => {
    const user = result[0]
    const hashedPassword = user.hashedPassword;
    let bool = bcrypt.compareSync(password, hashedPassword);
    if(bool){
      const userInfo = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      };
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
