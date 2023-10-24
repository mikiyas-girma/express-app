const express = require('express');

const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs')

app.listen(3000);

// using our own middleware for logging
app.use((req, res, next) => {
  console.log('new request has made');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

app.use(morgan('dev'));



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


// redirects
app.get('/about-us', (req, res) => {
  // res.sendFile('./views/about.html', {root : __dirname})
  res.render('about', { title: 'about'})
})

// 404 page  

app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html', { root : __dirname})
  res.render('404', { title: 'Page not found' })
})