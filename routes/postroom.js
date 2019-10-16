const router = require('express').Router();
let Room = require('../models/RoomModel');
var fs = require('fs');

const room1 = "../src/images/details-1.jpeg";

router.route('/').post((req,res) =>{
  var room = new Room({
    fields: {
      name: "presidential",
      slug: "presidential-room",
      rtype: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ]
    },
      images: [fs.readFileSync(room1),fs.readFileSync(room2),fs.readFileSync(room3),fs.readFileSync(room4)]
  });
  //insert customer object
  room.save((err,cust) => {
    if(err) return console.error(err);

    //this will print inserted record = database
    console.log(cust);
  });  
});



module.exports = router;