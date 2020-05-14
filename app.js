const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');//imports routes for the products
const app = express();

//set up mongoose connection
//const uri = 'mongodb+srv://chice:1995@cluster0-0pekv.mongodb.net/products?retryWrites=true&w=majority'
const mongoose = require('mongoose');
let dev_db_url = 
'mongodb+srv://chice:1995@cluster0-0pekv.mongodb.net/tests?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect (mongoDB);
mongoose.promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//mongoose.connect(uri, {
  //  useNewUrlParser: true,
    //useUnifiedTopology: true
//})
//.then( () => {
  //  console.log('MongoDB Connected...')
//})
//.catch(err => console.log(err))
  
//const mongoDB = process.env.MONGODB_URI || dev_db_url;
//ongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});