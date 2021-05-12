const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attributeSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    spprice: {
      type: Array,
      required: true
    },
    cusprice: {
      type: Array,
      required: true
    },
    active:{
      type: String,
      required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  });

module.exports = mongoose.model('AttributeGroup', attributeSchema);
