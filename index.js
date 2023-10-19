require('dotenv').config();
const express = require('express');
const app = express();
let router = express.Router
const path = require('path');
const bodyParser = require('body-parser');
const { fieldNames } = require('./public/js/fieldNames.js');
const { attachmentHttpRequest } = require('./public/js/attachmentHttpRequest.js')
const { itemHttpRequest } = require('./public/js/itemHttpRequest.js')
const fs = require('fs');

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
  res.render('index', { data: data } , )



})


app.listen(process.env.PORT, () => console.log(`httpntlm: ` + process.env.PORT));