import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditData=()=>{
    const {empid} =useParams();
    const [mydata, setMydata]= useState({}); 
    //mydata={_id: '670ccbfdbf666d7b59298d89', empno: 1002, empname: 'sakshi', salary: 56000, __v: 0}
    const loadData=()=>{
        let api="http://localhost:8000/students/studenteditdata";
        axios.post(api, {id:empid}).then((res)=>{
           console.log(res.data);
           setMydata(res.data);
        })
    }
 useEffect(()=>{
    loadData();
 }, [])
const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}));
    console.log(mydata);
}
const handleSubmit=()=>{
    let api="http://localhost:8000/students/studenteditsave";
    axios.post(api, mydata).then((res)=>{
        alert("Data updated!!!");
    })
}

    return(
        <>
         <h1> Edit Employee Data</h1>
         Edit Emp no <input type="text"  name="empno"
         value={mydata.empno} onChange={handleInput}  /> 
         <br/>
         Edit Emp name <input type="text" name="empname"
         value={mydata.empname}  onChange={handleInput}  />
         <br/>
         Edit Designation <input type="text" name="designation"
          value={mydata.designation} onChange={handleInput}  /> 
         <br/>
         Edit Salary <input type="text" name="salary" 
         value={mydata.salary}  onChange={handleInput}  />
         <br/>
         <button onClick={handleSubmit}>Edit Save!</button>
        </>
    )
}
export default EditData;