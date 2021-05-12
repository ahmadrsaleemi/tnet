const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PricelistSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    flatefare: {
      type: Array,
      required: true
    },
    meteredfare: {
      type: Array,
      required: true
    },
    attributegroup: {
      type: Array,
      required: true
    },
    active:{
      type:String,
      required:true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  });

module.exports = mongoose.model('Pricelist', PricelistSchema);
