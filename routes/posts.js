const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/postsControllers');

/* GET users listing. */
router.get('/', PostsControllers.getPosts);
router.post('/', PostsControllers.createPost);


module.exports = router;
