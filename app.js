const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', { root:  __dirname});
  // using ejs view engine

  const blogs = [
    { title: 'Blog 1', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Blog 2', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Blog 3', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  

  res.render('index', { title: 'home', blogs})
});

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', { root:  __dirname});
  res.render('about', { title: 'about'})
});
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'create a blog'})
});

app.listen(3000);

// redirects
app.get('/about-us', (req, res) => {
  // res.sendFile('./views/about.html', {root : __dirname})
  res.render('about', { title: 'about'})
})

// 404 page  

app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root : __dirname})
  res.render('404')
})