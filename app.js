const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', { root:  __dirname});
  // using ejs view engine
  res.render('index')
});

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', { root:  __dirname});
  res.render('about')
});
app.get('/blogs/create', (req, res) => {
  res.render('create')
});

app.listen(3000);

// redirects
app.get('/about-us', (req, res) => {
  // res.sendFile('./views/about.html', {root : __dirname})
  res.render('about')
})

// 404 page  

app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root : __dirname})
  res.render('404')
})