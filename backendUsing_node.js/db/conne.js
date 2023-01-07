const mongoose = require("mongoose");
const e="mongodb://localhost:27017/AttendenceSystem";
//require('dotenv').config();
const db = 'mongodb+srv://myChatapp:NtxksWb5Eken1FIi@cluster0.1nbnl.mongodb.net/Attend?retryWrites=true&w=majority'
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successfull`);
}).catch((e) => {
    console.log(`connection unsuccessfull`);
})

//const DB = process.env.DB
/*
mongoose.connect(DB ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successfull`);
}).catch((e) => {
    console.log(`connection unsuccessfull`);
})
*/
