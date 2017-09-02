'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const saltRounds = 10;
const secret = process.env.SECRET;

router.post('/users', (req, res, next) => {
  // console.log("You arrived at the /users route");
  const body = req.body;
  if (!body.firstName) {
    // console.log('badname');
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('First name must not be blank');
  } else if (!body.lastName) {
    // console.log('badlastname');
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('Last Name must not be blank');
  } else if (!body.email) {
    // console.log('bademail');
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('Email must not be blank');
  } else if (!body.password) {
    // console.log('badpass');
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
      console.log('you got here')
      const token = jwt.sign(newUser[0], secret);
      res.cookie('token', token, { httpOnly: true }).send(newUser[0]);
    })
    .catch((error) => {
      res.status(400)
        .set({ 'Content-Type': 'plain/text' })
        .send('Email already exists boo');
    });
});

// BELOW APP.USE WAS THERE IN OLD AUTH FILE

// router.use((req, res, next) => {
//   console.log("router.use in users.js");
//   if (req.user) {
//     return next();
//   }
//   res.sendStatus(401);
// });

router.patch('/users', (req, res, next) => {
  const id = req.user.id;
  const body = req.body;
  if (!Object.keys(body).length) {
    return res.status(400)
      .set({ 'Content-Type': 'plain/text' })
      .send('Nothing was changed');
  }
  if (body.password) {
    body.hashed_password = bcrypt.hashSync(body.password, saltRounds);
    delete body.password;
  }
  knex('users')
    .where('id', id)
    .update(body)
    .returning([
      'id',
      'firstName',
      'lastName',
      'email'
    ])
    .then((updateUser) => {
      res.send(updateUser);
    })
    .catch((error) => {
      if (error) {
        return console.error(error);
      }
      return res.status(404)
        .set({ 'Content-Type': 'plain/text' })
        .send('Not Found');
    });
});

router.delete('/users', (req, res, next) => {
  const id = req.user.id;
  knex('users')
    .del()
    .where('id', id)
    .returning([
      'id',
      'firstName',
      'lastName',
      'email'
    ])
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404)
          .set({ 'Content-Type': 'plain/text' })
          .send('User not found');
      }
      res.clearCookie('token').send(deletedUser);
    })
    .catch((error) => {
      if (error) {
        return console.error(error);
      }
      return res.status(404)
        .set({ 'Content-Type': 'plain/text' })
        .send('Not Found');
    });
});

module.exports = router;
