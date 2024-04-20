const { Server } = require("socket.io");
const express = require('express');
const cors=require('cors');
const { createServer } = require('http');
const app=express();
const server = createServer(app);
app.use(cors());
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });
  
  server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });