'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const saltRounds = 10;
const secret = process.env.SECRET;

router.post('/users', (req, res, next) => {
  const body = req.body;
  if (!body.firstName) {
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('First name must not be blank');
  } else if (!body.lastName) {
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('Last Name must not be blank');
  } else if (!body.email) {
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('Email must not be blank');
  } else if (!body.password) {
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('Password must not be blank');
  }

  body.password = bcrypt.hashSync(body.password, saltRounds);

  knex('users')
    .insert({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      hashedPassword: body.password
    })
    .returning([
      'id',
      'firstName',
      'lastName',
      'email'
    ])
    .then((newUser) => {
      const token = jwt.sign(newUser[0], secret);
      res.cookie('token', token).send(newUser[0]);
    })
    .catch((error) => {
      res.status(400)
        .set({ 'Content-Type': 'plain/text' })
        .send('Email already exists');
    });
});

module.exports = router;
