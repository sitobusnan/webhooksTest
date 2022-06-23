const express = require('express');
const router  = express.Router();

var axios = require('axios');
var data = JSON.stringify({
  "eventName": "test",
  "url": "http://localhost:2000/webhook/test",
  "user": "9ba89e78-c2bc-40f9-9b30-7a5335209b2b"
});

var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YmE4OWU3OC1jMmJjLTQwZjktOWIzMC03YTUzMzUyMDliMmIiLCJyb2xlIjpudWxsLCJvbmVUaW1lVG9rZW4iOmZhbHNlLCJpYXQiOjE2NTQwOTc0OTAsImV4cCI6MTY1NDA5NzYxMH0.cMciFzwiVcoMmC-YCsOaV3gXy9CIh_t9gSPqMNVQf7E'

var config = {
  method: 'post',
  url: 'http://localhost:3308/webhook',
  headers: { 
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json'
  },
  data : data
};

/* GET home page */
router.get('/', (req, res, next) => {
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    console.log(response);
    res.json({message: 'SENDED'});
  })
  .catch(function (error) {
    console.log(error);
    res.json({message: 'fail'})
  });
});

router.post('/webhook', (req, res, next) => {
  console.log(req.body.message)
  res.send(req.body).status(200)
});


module.exports = router;
