const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

const PORT = 3000;

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

// Test
server.get('/', (req, res, next) => res.send('Backend'));

// Start server
server.listen(PORT, () => console.log("Server running on port " + PORT));
