const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flatefaredetailsSchema = new Schema({
    pickup: {
        type: String,
        required: true
    },
    drop: {
        type: String,
        required: true
    },
    spprice : {
        type:Array,
        required: true
    },
    cusprice : {
        type:Array,
        required: true
    },
    rate : {
        type:String,
        required: true
    },
    faltefare: {
        type: Schema.Types.ObjectId,
        ref: 'Flatefare'
    }
  });

module.exports = mongoose.model('Flatefaredetails', flatefaredetailsSchema);
