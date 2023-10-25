const express = require('express');
const blogController = require('../controllers/blogController');


const router = express.Router();

router.get('/', blogController.blog_index)


router.get('/create', blogController.blog_create_get);

// post request to the server
router.post('/', blogController.blog_create_post);

// get request to individual post using their id || details
router.get('/:id', blogController.blog_details);

// delete request for removing specific blog
router.delete('/:id', blogController.blog_delete);

module.exports = router;