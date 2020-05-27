const express = require('express');
const router = express.Router({ mergeParams: true });
const fakeComments = require('../data/comments');

// Get a list of comments
router.get('/', (req, res) => {
    // l'id du post lié au code dans le fichier posts.js est récupéré
    const postId = Number(req.params.postId);
   
    // on filtre les commentaires en fonction de leur lien avec l'id du post
    const postComments = fakeComments.filter(comment => comment.post_id === postId);
    res.json(postComments);
});
  
module.exports = router;