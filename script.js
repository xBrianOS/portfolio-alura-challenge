'use strict'

// DOM Elements
let usrName = document.querySelector('#name');
let usrEmail = document.getElementById('email');
let usrIssue = document.getElementById('issue');
let usrMessage = document.getElementById('message').value;
let nameValidation = document.querySelector('.name-validation');
let emailValidation = document.querySelector('.email-validation');
let issueValidation = document.querySelector('.issue-validation');

// Regular Expression
let reName = /^[a-zA-Z\s]+$/; //name regular expression
let reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email regular expression
let mincharacters = 8;
let issueMaxCharacteres = 15;

usrName.addEventListener('keyup', () => {
  if (!usrName.value.trim()){
    nameValidation.style.display = "block";
  }
  return false;
})

usrEmail.addEventListener('keyup', () => {
  if(!usrEmail.value || usrEmail.value === reEmail){
    emailValidation.style.display = "block";
  }
  return false;
})

usrIssue.addEventListener('keyup', () => {
  if(!usrIssue.value) {
    issueValidation.style.display = 'block';
  } else{
    nameValidation.style.display = "none`";
  }
})