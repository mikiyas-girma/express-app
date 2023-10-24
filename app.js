const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose');

const blog = require('./models/blog');
const Blog = require('./models/blog');

// connect to db
const dbURI = 'mongodb+srv://mikiy16:test1234@cluster0.bmq6vr3.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => {
  app.listen(3000);
  console.log('connected to the db')
})
.catch((err) => {
  console.log(err)
})


const app = express();

app.set('view engine', 'ejs')

// app.listen(3000);

// using our own middleware for logging
// app.use((req, res, next) => {
//   console.log('new request has made');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   next();
// });

// third party middleware for logging
// app.use(morgan('dev'));

app.use(express.static('public'));

// mongoose and mongo sandbox routes

// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'the blog snippet', 
//     body: 'more about the blog'
//   });

//   blog.save()
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => console.log(err));
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => {
//     console.log(err)
//   });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('653825fd3c20614055f0ed61')
//   .then((result) => {
//     res.send(result);
//   })
//   .catch((err) => console.log(err));
// });



app.get('/', (req, res) => {

  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', { root:  __dirname});
  res.render('about', { title: 'about'})
});



// Blogs route

app.get('/blogs', (req, res) => {
  Blog.find()
     .then((result) => {
      res.render('index', {title : 'All blogs', blogs: result})
     })
     .catch((err) => console.log(err))
})
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