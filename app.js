'use strict';
let dataset = require('./dataset.json');

let emails = dataset.emails;

let filterDuplicateEmails = emails.reduce((allUsers, currentUsers) => {
  if(allUsers.hasOwnProperty(currentUsers.email)){
    allUsers[currentUsers.email]++;
  }else{
    allUsers[currentUsers.email] = 1;
  }
  return allUsers
}, {});