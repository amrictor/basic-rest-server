const express = require('express');
const { default: UserService } = require('../../services/user');

const app = express();

// test
app.get('/test', (req, res) => {
  console.log('testing!')
  res.status(200).send({nice: 'nice'})
});

// create account
app.post('/create_account' , (req, res) => {
  const { userEmail, userNickname, userPassword, userFirstName, userLastName } = req.body;
  // TODO: Bad request check, sanitize input
  try {
    UserService.signUp({ userEmail, userNickname, userPassword, userFirstName, userLastName })
    res.status(201) 
  } catch ({status, ...error}) {
    res.status(err.status).send(error) 
  }
});

// login to account
app.post('/login' , (req, res) => {
  const { userNickname, userPassword } = req.body;
  // TODO: Bad request check, sanitize input
  try {
    const token = UserService.logIn({ userNickname, userPassword })
  } catch ({status, ...error}) {
    res.status(err.status).send(error) 
  }
});

module.exports = app;