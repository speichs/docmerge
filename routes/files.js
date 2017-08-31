'use strict'

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const saltRounds = 10;
const secret = process.env.SECRET;


router.post('/files', (req,res,next)=>{
  console.log(req.body);
  const body = req.body;
  knex('users')
  .select('id')
  .where('email', body.email)
  .then(upperResult => {
    knex('files')
    .insert({data: JSON.stringify(body.data), owner_id: upperResult[0]["id"]})
    .returning([
      'id',
      'data',
      'owner_id'
    ]).then(lowerResult => res.send(lowerResult))
  })
})

router.get('/files/:id', (req,res,next)=>{
  let id = req.params.id
  console.log('bitch you here');
  console.log(id);
  knex('files')
  .select('*')
  .where('owner_id', id)
  .then(result => {res.send(result)})
})



module.exports = router;
