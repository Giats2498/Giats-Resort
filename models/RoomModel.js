const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const RoomModelSchema = new Schema({
  fields: {
      name: String,
      slug: String,
      rtype: String,
      price: Number,
      size: Number,
      capacity: Number,
      pets: Boolean,
      breakfast: Boolean,
      featured: Boolean,
      description: String,
      extras: [String]
  },
      images: [Buffer],
      reservation: [Object]
});

const RoomModel = mongoose.model('room', RoomModelSchema);

module.exports = RoomModel;