import React, {useState} from "react";
import StData from "./StData";


const baseUrl="http://localhost:4000";
const url="";
function Attend() {
const [inputs,setInput]=useState({
  name:"",
  rollNo:""
})
const [studentList,setStudentList]=useState([])
 const handleChange=(e)=>{
  console.log(e.target.value, e.target.name);
  const{name,value}=e.target;
  setInput(prev=>({...prev,[name]:value}));

 }
 const handleCheckIn= async(e)=>{
try {
  const response=await fetch(`${baseUrl}/checkIn`, {
    method: "POST",
    body: JSON.stringify(inputs),
    headers: {
      "Content-type": "application/json; charset=UTF-8"}})
      const responsejson = await response.json()
      setInput({
        name:"",
      rollNo:""
      })
      alert(responsejson.message)
} catch (error) {
  alert("Check In Failed! Try again")
}
}
// /checkinAll
const handleCheckOut= async(e)=>{
  try {
    const response=await fetch(`${baseUrl}/checkOut`, {
      method: "POST",
      body: JSON.stringify({rollNo:inputs.rollNo}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"}})
        const responsejson = await response.json()
        setInput({
          name:"",
        rollNo:""
        })
        alert(responsejson.message)
  } catch (error) {
    alert("Check Out Failed! Try again")
  }
  }



  const getStudents= async(e)=>{
    try {
      const response=await fetch(`${baseUrl}/checkinAll`)
      const responsejson = await response.json()
      setStudentList(responsejson.data)
      console.log(responsejson)
    } catch (error) {
      // alert("Faild to get Students")
    }
    }
  

  return (
    <>
      <StData getStudents={getStudents} studentList={studentList}/>

      <div className="container text-center" style={{ color:"#e5f8fc",background: "#0081C9" }}>
        <h4 className="my-4 pt-4"><strong>Latracal Solutions Private Limited</strong></h4>
        <h1 className="pb-4">Attendence App</h1>
      </div>

      <div className="container" style={{border: "5px solid #0081C9"}}>

         <div className="container pt-5 pb-3 justify-content-center">

            <div className="row pb-3">
               <div className="col-3 text-center fw-bolder" style={{color:"#0081C9"}}>
                  <h4 className="fw-bolder">NAME</h4>
               </div>
               <div className="col-9">
                  <div className="input-group ">
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Student's Name"
            aria-label="Recipient's Name"
            aria-describedby="button-addon2"
          />
                  </div>
               </div>
            </div>

            <div className="row pb-3">
               <div className="col-3 text-center fw-bolder" style={{color:"#0081C9"}}>
                  <h4 className="fw-bolder">ROLL NO.</h4>
               </div>
               <div className="col-9">
                  <div className="input-group ">
          <input
            type="text"
            name="rollNo"
            onChange={handleChange}
            value={inputs.rollNo}
            className="form-control"
            placeholder="Student's Roll No"
            aria-label="Recipient's Roll No"
            aria-describedby="button-addon2"
          />
                  </div>
               </div>
            </div>

            <div className="row">
              <div className="col-6 text-end">
              <button className="btn fw-bolder" 
              style={{ backgroundColor: "#0081C9", color:"#e5f8fc",width:"70%" }} 
              onClick={handleCheckIn}
              type="submit">Check IN</button>
              </div>
              <div className="col-6 text-end">
              <button className="btn fw-bolder" 
              style={{ backgroundColor: "#0081C9", color:"#e5f8fc",width:"70%" }} 
              onClick={handleCheckOut}
              type="submit">Check Out</button>
              </div>
            </div>

         </div>
      </div>

     
    </>
  );
}

export default Attend;
