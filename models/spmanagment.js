const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SpmanagmentSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    dispatchMethod: {
      type: String,
      required: true
    },
    active: {
      type: String,
      required: true
    },
    allocationtime: {
      type: String,
      required: true
    },
    cancelationtime: {
        type: String,
        required: true
    },
    pricelist:{
        type:String,
        required:true
    },
    pricemethod:{
        type:String,
        required:true
    },
    coveredarea:{
        type:Array,
        required:true
    },
    segments:{
        type:Array,
        required:true
    },
    attributes:{
        type:Array,
        required:true
    },
    coid:{
      type:String,
      default:""
    },
    customer:{
      type:String,
      default:""
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  });

module.exports = mongoose.model('Spmanagment', SpmanagmentSchema);
