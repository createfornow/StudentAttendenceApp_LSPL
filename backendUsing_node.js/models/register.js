const mongoose = require("mongoose") ;
// Schema

const Schema = new mongoose.Schema({
   
    name : {
        type : String,
        required : true
  },
  rollNo :{
        type : Number,
        required : true,
},
    checkIn : {
        type : String,
        default: Date.now()
    },
    checkOut : {
      type : String,
      default: null,
  }
});



// now we need to create collections

const Attendence = new mongoose.model("Attendence" , Schema);

module.exports = Attendence;
