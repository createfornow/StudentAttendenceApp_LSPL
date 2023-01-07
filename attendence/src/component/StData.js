import React from "react";

function StData({studentList,getStudents}) {

  // const studentList=[{
  //   no:1,
  //   name:"ravi",
  //   roll:23
  // },{
  //   no:2,
  //     name:"Banner",
  //     roll:32
  //   },{
  //     no:3,
  //     name:"edii",
  //     roll:12
  //   },{
  //     no:4,
  //     name:"Caser",
  //     roll:44
  //   },{
  //     no:5,
  //     name:"mab",
  //     roll:1
  //   },{
  //     no:6,
  //     name:"cavi",
  //     roll:2
  //   },{
  //     no:7,
  //     name:"rcvo",
  //     roll:13
  //   }
  // ]

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 text-end" style={{ color: "#0081C9" }}>
            <h3>
              <strong>Total Students Present</strong>
            </h3>
          </div>
          <div className="col-8 text-center">
            <p>
              <buttons
                onClick={getStudents}
                className="btn py-2 px-5 fw-bolder"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                style={{ backgroundColor: "#0081C9", color:"#e5f8fc",width:"80%" }}
                aria-controls="collapseExample">

                Get List of Students Present
              </buttons>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
              <div className="row fw-bolder pb-2">
                          <div className="col-4">S.No.</div>
                          <div className="col-4">Student Name</div>
                          <div className="col-4">Student Roll No.</div>
                          </div>
                   {studentList.length>0 && studentList.map((ele,key)=>{
                       return(
                        <div className="row " key={key}>
                          <div className="col-4 " >{key+1}</div>
                          <div className="col-4">{ele.name}</div>
                          <div className="col-4">{ele.rollNo}</div>
                          </div>
                       );
                    })}
               
                {/* <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S.no</th>
                      <th scope="col">Name</th>
                      <th scope="col">Roll No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {data.map((ele)=>{
      return(<div key={ele.roll}>
      <th scope="row" >1</th>
        <td>{ele.name}</td>
        <td>{ele.roll}</td>
      </div>
        
      );
    })}
                     
                    </tr>
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StData;
