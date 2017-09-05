'use strict'
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const saltRounds = 10;
const secret = process.env.SECRET;


router.post('/projects', (req,res,next)=>{
  console.log(req.body.data);
  const { email, data } = req.body;
  knex('users')
  .select('id')
  .where('email', email)
  .then(upperResult => {
    knex('files')
    .insert({
      name: data.name,
      data: JSON.stringify(data.data),
      owner_id: upperResult[0]["id"],
      map: JSON.stringify(data.map),
      isProject: data.isProject
    })
    .returning('*')
    .then(lowerResult => res.send(lowerResult[0]))
    .catch(err => res.sendStatus(404))
  })
})

module.exports = router;