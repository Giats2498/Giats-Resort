const router = require('express').Router();
let Room = require('../models/RoomModel');


router.route('/').get((req, res) => {
    Room.find({ "fields.featured": true }, { "fields.name": 1,"fields.slug": 1,"fields.price": 1,images: {$slice:1},"fields.featured":1})
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;