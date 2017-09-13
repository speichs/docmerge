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

router.post('/email', (req,res,next)=>{
  const { email, data } = req.body;
  console.log('email before', email);
  email = email.replace(/\s/g, '');
  console.log('after:', email);
  let unparsed = papaparse.unparse(data.data)
  fs.writeFileSync('./download.csv', unparsed, 'utf8')
  fs.readFile('./download.csv', 'base64', (err,dat)=>{
    if(err){
      throw err
    }else{
      const msg = {
        to: email,
        from: 'test@example.com',
        subject: 'Your Data',
        text: 'Please find your CSV file attached!',
        attachments: [
          {
            fileName: 'download',
            type:'application/csv',
            content: dat
          }
        ],
        html: '<strong>Please Find Your CSV File Attached!</strong>',
      };
      sgMail.send(msg);
      res.sendStatus(200)
    }
  })
})

module.exports = router;
