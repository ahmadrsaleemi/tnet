const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attributeSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    Order: {
      type: Number,
      required: true
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

module.exports = mongoose.model('Attribute', attributeSchema);
