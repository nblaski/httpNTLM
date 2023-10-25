require('dotenv').config();
const express = require('express');
const app = express();
let router = express.Router
const path = require('path');
const bodyParser = require('body-parser');
const { fieldNames } = require('./public/js/fieldNames.js');
const { attachmentHttpRequest } = require('./public/js/attachmentHttpRequest.js')
const { itemHttpRequest } = require('./public/js/itemHttpRequest.js')
const { versions } = require('./public/js/versions.js')
const fs = require('fs');
const mongoose = require('mongoose');


require('body-parser-xml')(bodyParser);

app.use(
    bodyParser.xml({
    //   limit: '1MB', // Reject payload bigger than 1 MB
      xmlParseOptions: {
        normalize: true, // Trim whitespace inside text nodes
        normalizeTags: true, // Transform tags to lowercase
        explicitArray: false, // Only put nodes in array if >1
      },
    }),
  );

  const connectionParams={
    // useNewUrlParser: true,
    useUnifiedTopology: true 
  }

  mongoose.connect(process.env.DATABASE_URL,connectionParams)
  .then( () => {
      console.log('Connected to the database!')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
 

  // const itemsGet = await itemHttpRequest();
  // const items = await itemsGet;
  // console.log(itemsGet)

  // const dataAttachments = await attachmentHttpRequest();
  // console.log(dataAttachments)

  const data = await  itemHttpRequest();
  // const version = await versions();

  // res.render('index', { data: data } , )
  res.render('test')



})


app.listen(process.env.PORT, () => console.log(`httpntlm: ` + process.env.PORT));