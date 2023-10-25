const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/', (req, res) => {
  Blog.find().sort({ createdAt : -1 })
     .then((result) => {
      res.render('index', {title : 'All blogs', blogs: result})
     })
     .catch((err) => console.log(err))
})
router.get('/create', (req, res) => {
  res.render('create', { title: 'create a blog'})
});

// post request to the server
router.post('/', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
      res.redirect('/blogs')
    })
    .catch((err) => console.log(err));
});

// get request to individual post using their id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog : result, title: 'Blog details'} );
    })
    .catch((err) => console.log(err));
});

// delete request for removing specific blog
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs'})
    })
    .catch(err => console.log(err));
});

module.exports = router;