const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meteredfareSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    startday: {
        type: String,
        required: true
    },
    endday: {
    type: String,
    required: true
    },
    starthoure: {
        type: String,
        required: true
    },
    endhoure: {
        type: String,
        required: true
    },
    active:{
        type:String,
        required:true
    },
    allday:{
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    distancebased: {
        type: Array,
    },
    timebased: {
        type: Array,
    }
  });

module.exports = mongoose.model('Meteredfare', meteredfareSchema);
