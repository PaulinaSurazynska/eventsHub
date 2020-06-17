const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }
  let payload = jwt.verify(token, 'secretKey');
  if (!payload) {
    return res.status(401).send('Unauthorized request');
  }
  req.userId = payload.subject;
  next();
}

router.get('/', (req, res) => {
  res.send('FROM API router');
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registerUser) => {
    if (error) {
      console.log(error);
    } else {
      let payload = { subject: registerUser._id };
      let token = jwt.sign(payload, 'secretKey');
      res.status(200).send({ token });
    }
  });
});

router.post('/login', (req, res) => {
  let userData = req.body;
  //   check if user exists in the database
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send('Invalid email');
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('Invalid password');
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, 'secretKey');
          res.status(200).send({ token });
        }
      }
    }
  });
});

router.get('/events', (req, res) => {
  let events = [
    {
      _id: '1',
      name: 'name1',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '2',
      name: 'name2',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '3',
      name: 'name3',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '4',
      name: 'name4',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '5',
      name: 'name5',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '6',
      name: 'name6',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
  ];
  res.json(events);
});

router.get('/special', verifyToken, (req, res) => {
  let events = [
    {
      _id: '1',
      name: 'name1',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '2',
      name: 'name2',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '3',
      name: 'name3',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '4',
      name: 'name4',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '5',
      name: 'name5',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
    {
      _id: '6',
      name: 'name6',
      description: 'lorem ipsum',
      date: '1995-12-17T03:24:00',
    },
  ];
  res.json(events);
});

module.exports = router;
