const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const segmentSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    passanger_capacity: {
      type: String,
      required: true
    },
    Order: {
      type: Number,
      required: true
    },
    bag: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default:''
    },
    date: {
      type: Date,
      required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  });

module.exports = mongoose.model('Segment', segmentSchema);
