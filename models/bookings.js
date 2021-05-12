const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  depart: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cellphone: {
    type: String,
    required: true
  },
  segment: {
    type: String,
    required: true
  },
  sp: {
    type: String,
    required: true
  },
  newsp: {
    type: String,
    required: true
  },
  cp: {
    type: String,
    required: true
  },
  booking_id:{
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  date:{
    type:String,
    required:true
  },
  time:{
    type:String,
    required:true
  },
  serviceprovide:{
    type:String,
    required:true
  },
  mybookingid:{
    type:String,
    required:true
  },
  bookingfrom:{
    type:String,
    required:true
  },
  session : {
    type:String,
    default:""
  },
  attributes: {
    type:Array,
    default:[]
  },
  flight:{
    type:String,
    default:"no flight number"
  },
  refund:{
    type:Array,
    default:[]
  },
  postdata:{
    type:Array,
    default:[]
  },
  canceltime:{
    type:String,
    default:""
  },
  ivcardoerror:{
    type:String,
    default:""
  },
  assignmentstatus:{
    type:String,
    default:""
  },
  creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
