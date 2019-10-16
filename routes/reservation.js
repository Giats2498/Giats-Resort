const router = require('express').Router();
let Room = require('../models/RoomModel');

router.route('/').post((req,res) =>{
  var ob = { roomname:req.body.roomname,checkin:req.body.checkin,checkout:req.body.checkout,nights:req.body.nights,guests:req.body.guests,price:req.body.price,title:req.body.title,
            firstname:req.body.firstname,lastname:req.body.lastname,address:req.body.address,postalcode:req.body.postalcode,city:req.body.city,country:req.body.country,
            telephone:req.body.telephone,email:req.body.email,requests:req.body.requests,confirmdate:new Date().toLocaleString("en-US", {timeZone: 'Europe/Athens'})};
  Room.findOneAndUpdate(
    { "fields.name":req.body.roomname}, 
    { $push: { reservation: ob  } },
    function (error, success) {
      if (error) {
          res.send(error);
          console.log(error);
      } else {
          res.send(success);
          console.log(success);
      }
  });
});



module.exports = router;