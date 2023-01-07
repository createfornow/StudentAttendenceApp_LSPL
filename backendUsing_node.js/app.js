 const express = require("express");
 const app = express();
 const port = process.env.PORT || 4000;
 require("./db/conne")
 const path = require("path");
const Attendence = require('./models/register');
const bodyParser = require('body-parser');

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//----------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------
// for check in today
app.post("/checkIn" , async (req , res) =>{
  try {
   const {name , rollNo} = req.body;
   // today midnight 00:00:00am
   let  todayMidnight = Date.parse( new Date(new Date().setHours(0,0,0,0)));
// let  nextMidnight = Date.parse( new Date(new Date().setHours(24,0,0,0)));  // next mid
    let alreadyCheckIn =  await Attendence.find( { rollNo:rollNo ,  checkIn: { $gte: todayMidnight } } )

    if(alreadyCheckIn.length == 0){

    
        const saveData = new Attendence({
          name ,
          rollNo
        })
         const data = await saveData.save();
         res.status(201).jsonp({
          data:data,
          message:`succefully saved data`,
          statusCode:201
         })
        } else{
          res.status(200).jsonp({
            data:null,
            message:`Already check in today`,
            statusCode:200
           })
        }

  } catch (e) {
    res.status(500).jsonp({
      data:null,
      message:`Something went wrong!`,
      statusCode:500,
      err:e
     })
  }
})



//-------------------------------------------------------------------------------------------------------------------------------------------
// for get list of all present users today
app.get("/checkinAll" , async (req , res) =>{
//  res.send("hello")
try {
  let  todayMidnight = Date.parse( new Date(new Date().setHours(0,0,0,0)));
 //let  nextMidnight = Date.parse( new Date(new Date().setHours(24,0,0,0)));  // next mid
    let alreadyCheckIn =  await Attendence.find( {   checkIn: { $gte: todayMidnight } ,   checkOut: null} )

    res.status(200).jsonp({
      data:alreadyCheckIn,
      message:`Already check in today`,
      statusCode:200
     })
} catch (err) {
  res.status(500).jsonp({
    data:null,
    message:`Something went wrong!`,
    statusCode:500,
    err:err
   })

}

})

// ---------------------------------------------------------------------------------
app.get("/checkinAlltoday" , async (req , res) =>{
  //  res.send("hello")
  try {
    let  todayMidnight = Date.parse( new Date(new Date().setHours(0,0,0,0)));
   //let  nextMidnight = Date.parse( new Date(new Date().setHours(24,0,0,0)));  // next mid
      let alreadyCheckIn =  await Attendence.find( {   checkIn: { $gte: todayMidnight }} )
  
      res.status(200).jsonp({
        data:alreadyCheckIn,
        message:`Already check in today`,
        statusCode:200
       })
  } catch (err) {
    res.status(500).jsonp({
      data:null,
      message:`Something went wrong!`,
      statusCode:500,
      err:err
     })
  
  }
  
  })



//-------------------------------------------------------------------------------------------------------------------------------------------
// Update checkout by roll number
app.post("/checkOut" , async(req , res) =>{
  const {rollNo} = req.body;
  let  todayMidnight = Date.parse( new Date(new Date().setHours(0,0,0,0)));

  try{
    let alreadyCheckIn =  await Attendence.find( { rollNo:rollNo ,  checkIn: { $gte: todayMidnight }  } )
    console.log(alreadyCheckIn)
    if(alreadyCheckIn.length  > 0){
      if(alreadyCheckIn[0].checkOut != null){
        res.status(200).jsonp({
          data:alreadyCheckIn,
          message:`Already check out!`,
          statusCode:200
         })
         res.end();
      }else{
        let data =  await Attendence.findOneAndUpdate({rollNo , checkIn: { $gte: todayMidnight }} , {
          $set:{
            checkOut : Date.now()
          }
        })
        res.status(200).jsonp({
          data:data,
          message:` check out succesfully `,
          statusCode:200
         })
      }
    
    }else{
      res.status(200).jsonp({
        data:alreadyCheckIn,
        message:`You have not check in today`,
        statusCode:200
       })
    }
  } catch(err){
    console.log(err)
    res.status(500).jsonp({
      data:null,
      message:`Something went wrong!`,
      statusCode:500,
      err:err
     })
  }
})


//------------------------------------------------------------------------------------------------------------------------------------------
// for listen port
 app.listen(port , () =>{
   console.log(`server is running ${port}`);
 })
