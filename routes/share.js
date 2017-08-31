'use strict'
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const saltRounds = 10;
const secret = process.env.SECRET;

router.post('/share', (req,res,next)=>{
  const body = req.body
  knex('users')
  .select('id')
  .where('email', body.email)
  .then(firstResult => {
    knex('client_files')
    .insert({file_id: body.file_id, client_id: firstResult[0].id})
    .returning('*')
    .then(secondResult => res.send(secondResult[0]))
  })
})

router.get('/share/:id', (req,res,next)=>{
  console.log('share getter');
  const id = req.params.id
  knex.select('*')
  .from('files')
  .innerJoin('client_files', 'files.id', 'client_files.file_id').then(result=>{
    console.log('result', result)
    res.send(result)
  }
  )
})

module.exports = router;
