const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flatefareSchema = new Schema({
    name: {
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
    details: {
        type: Array,
    }
  });

module.exports = mongoose.model('Flatefare', flatefareSchema);
