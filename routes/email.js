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
  console.log('hello from email');
  const { email, data } = req.body;
  let unparsed = papaparse.unparse(data.data)
  fs.writeFileSync('./download.csv', unparsed, 'utf8')
  fs.readFile('./download.csv', 'base64', (err,dat)=>{
    if(err){
      throw err
    }else{
      const msg = {
        to: 'sean.eich@gmail.com',
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
