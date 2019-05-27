var express = require('express');
var path = require('path');
var app = express();
var port = 8080;
var mongoose = require('mongoose');
var apiRoute = require('./routes/api.route');

// Init MongoDB
var password = encodeURI('admin');
var connString = `mongodb://admin:${password}@cluster0-shard-00-00-kswwb.gcp.mongodb.net:27017,cluster0-shard-00-01-kswwb.gcp.mongodb.net:27017,cluster0-shard-00-02-kswwb.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`;
mongoose.connect(connString, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error.'));
db.once('open', function (callback) {
  console.log('mongodb connection succeeded.');
});

// Init Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static website:
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

//////////////////////////////////////////

// ROUTES
app.use('/api', apiRoute);

//////////////////////////////////////////
app.listen(port, () => console.log(`SERVER BERJALAN DI PORT ${port} !`));
