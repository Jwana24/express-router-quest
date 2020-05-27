const express = require('express');
const router = express.Router();
const fakeTags = require('../data/tags');

router.get('/', (req, res) => {
    res.json(fakeTags);
});

router.get('/:tagId', (req, res) => {
    const tagId = Number(req.params.id);
    const foundTag = fakeTags.find(tag => tag.id === tagId);
    if(!foundTag){
        return res.status(404).json({
            error: 'Tag not found !'
        });
    }
    return res.json(foundTag);
});

module.exports = router;