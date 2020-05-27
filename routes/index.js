const express = require('express');
const router = express.Router();
const posts = require('./posts');
const tags = require('./tags');

// chaque routes principales sont listées ici
router.use('/posts', posts);
router.use('/tags', tags);

module.exports = router;