'use strict';
let dataset = require('./dataset.json');

let emails = dataset.emails;

let sortEmails = emails.reduce((accum, current) => {
  if(accum.hasOwnProperty(current.email)){
    accum[current.email]++;
  }else{
    accum[current.email] = 1;
  }
  return accum
}, {});
console.log(sortEmails);
console.log(emails.length)
