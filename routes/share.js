'use strict'
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const saltRounds = 10;
const secret = process.env.SECRET;

router.post('/share', (req,res,next)=>{
  const { shareEmail, fileId, userId } = req.body
  knex('users')
  .select('id')
  .where('email', shareEmail)
  .then(upper => {
    knex('client_files')
    .insert({file_id: fileId, client_id: upper[0].id})
    .returning('*')
    .then(lower => res.send(lower[0]))
  }).catch(err => res.send(err))
})

router.get('/share/:id', (req,res,next)=>{
  const userid = req.params.id
  knex.select('files.id', 'name', 'data', 'map', 'isProject', 'owner_id')
  .from('client_files')
  .where('client_id', userid)
  .innerJoin('files', 'files.id', 'client_files.file_id').then(result=>{
    res.send(result)
  }
  )
})

module.exports = router;
