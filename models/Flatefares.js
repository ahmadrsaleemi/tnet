const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flatefareSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    startday:{
      type: String,
      required: true
    },
    endday:{
      type: String,
      required: true
    },
    starthoure:{
      type: String,
      required: true
    },
    endhoure:{
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    active:{
      type: String,
      required: true
    },
    allday:{
      type: String,
      required: true
    },
    details: {
        type: Array,
    }
  });

module.exports = mongoose.model('Flatefare', flatefareSchema);
