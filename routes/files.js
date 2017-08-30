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
  let body = req.body;
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

router.get('/files', (req,res,next)=>{
  res.send('hello from files')
})



module.exports = router;
