const router = require('express').Router();
let Room = require('../models/RoomModel');

router.route('/').get((req, res) => {
    Room.find({}, { "fields.name": 1,"fields.slug": 1,"fields.rtype": 1,"fields.price": 1,"fields.size": 1,"fields.capacity": 1,"fields.pets": 1,"fields.breakfast": 1,
    "fields.featured":1,"fields.description":1,images: {$slice:1}})
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;