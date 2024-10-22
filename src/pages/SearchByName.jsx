import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {message} from "antd";

const SearchByName=()=>{
    const [empname, setEmpname]= useState("");
    const [mydata, setMydata]=useState([]);
   
    const handleInput=(e)=>{
        setEmpname(e.target.value);
        let api=`http://localhost:8000/students/studentsearchbyname/?empname=${empname}`;
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    
    }

    const ans=mydata.map((key)=>{
           return(
            <>
              <tr>
                 <td> {key.empno} </td>
                 <td> {key.empname} </td>
                 <td> {key.designation} </td>
                 <td> {key.salary} </td>
              </tr>
            </>
           )
    })
    return(
        <>
          <h1> Search employee records</h1>
          Enter Employee  Name : <input type="text" value={empname} 
          onChange={handleInput} />
        
           <br/> <br/>
           <hr/>
          <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Employee No.</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th> Salary</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>

        </>
    )
}

export default SearchByName;