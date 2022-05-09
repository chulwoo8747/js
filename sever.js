const express = require('express');
const app = express();

const sever = app.listen(3000, () => {
    console.log('Start Sever : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs'),rederFile);


app.get('/', function (req, res) {
    res.render('index.html')
  })
 
  
  app.get('/about', function (req, res) {
    res.send('about page')
  })
  