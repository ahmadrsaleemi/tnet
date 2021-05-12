const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const geofencingSchema = new Schema({
    country: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    area: {
      type: String
    },
    poi: {
        type: String
    },
    geofencing: {
        type: String,
        required: true
    },
    coordinates : {
      type: Array,
      required: true
    },
    title:{
      type:String,
      required:true
    },
    active:{
      type:Boolean,
      required:true
    },
    iata:{
      type:String,
      default:""
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  });

module.exports = mongoose.model('Geofencing', geofencingSchema);
