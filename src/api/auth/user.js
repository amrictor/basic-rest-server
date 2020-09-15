const express = require('express');
const { default: UserService } = require('../../services/user');

const app = express();

// test
app.get('/test', (req, res) => {
  console.log('testing!')
  res.status(200).send({nice: 'nice'})
});

// change password 
app.post('/change_password' , (req, res) => {
  const userId = req.userId;
  const { userNewPassword } = req.body;
  // TODO: Bad request check, sanitize input  
  try {
    UserService.changePassword({ userId, userNewPassword })
    res.status(200).send({userId})
  } catch ({status, ...error}) {
    res.status(status).send(error) 
  }
});

module.exports = app;