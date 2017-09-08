'use strict'
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const saltRounds = 10;
const secret = process.env.SECRET;
const fs = require('fs');
const papaparse=require('papaparse')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


router.post('/projects', (req,res,next)=>{
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
    .returning([
      'files.id',
      'data',
      'name',
      'map',
      'isProject',
      'owner_id'
    ])
    .then(lowerResult => {
      res.send(lowerResult[0])
    })
    .catch(err => res.sendStatus(404))
  })
})

router.patch('/projects/:id', (req,res,next)=>{
  const { email, data } = req.body;
  knex('files')
  .where('id', req.params.id)
  .returning('*')
  .update({data: JSON.stringify(data.data)})
  .then(result => res.send(result[0]))
  .catch(err => res.sendStatus(404))
})

module.exports = router;
