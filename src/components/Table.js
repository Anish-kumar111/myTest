import React, { useState } from "react";
import TableData from "../data/table.json";

export function getTotal(arr=[]) { // array ka total nikalne ka func bnayenge or argument mai array denge
  let total = 0; // total var bnayege or first value 0 denge
  for (let m of arr) { // jo b array arr argument mai use loop mai chalayenge 
    total += m // total mai add krte jaynge
  }
  return total; // total mai answer return kradenge
}

function Table() {
  const [section, setSection] = useState("")  // section dynamic krne k liye state bnayi
  
  const Students = TableData.data;
  const studentsLen = Students?.length
  console.log("Students => ", Students)
  const allMarks = Students?.map(function(s){
    return s.marks
  })
  console.log("allMarks", allMarks)

  const handleFilter = (e) => { // handle bnaya jisse section change hoga
    setSection(e.target.value)
  }

 
  const totalMarks = getTotal(allMarks)  // const mai total value ajayegi func call krake or array pass krake 

// filter use krke students ko section se filter krlenege
  const filtStudents = Students.filter(function(student){  
    return student.section === section
  })
// ternary use krke agar section empty hai to original array dikhayenge warna filter students
  const dynamicStudents = section === "" ? Students : filtStudents 

  return (
     <div>
      <select onChange={(e) => handleFilter(e)} className="border m-2 border-black rounded">
        <option></option>
        <option>A</option>
        <option >B</option>
        <option>C</option>
      </select>
      <h2>No. of students - {studentsLen}</h2>
      <table className="w-96">
        <tr className="text-cyan-300 bg-black">
          <th>Name</th>
          <th>Section</th>
          <th>Subject</th>
          <th>Roll No.</th>
        </tr>
 {/* dynamicStudents use krenge kyoki ye filter or original array dikhaye depend on state "section" */}
        {dynamicStudents.map(function (data) { 
          return (
            <tr>
            <td>{data.name}</td>
            <td>{data.section}</td>
            <td>{data.subject}</td>
            <td>{data.roll_no}</td>
          </tr>
          )})}
      </table>
      <div className="mt-5">
        total : {totalMarks}
      </div>
    </div>
  );
}

export default Table;