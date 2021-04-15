import React from 'react'
import "../style.css"
function CSEDept(props) {
  
  return (
        <div>
        <table>
          <tr>
            <th>Faculty Name</th>
            <td>{props.facultyName}</td>
          </tr>
          <tr>
            <th>Subject Taken</th>
            <td>{props.subject}</td>
          </tr>
        </table>
        </div>
  )
}

export default CSEDept
//css
//table, th, td {
  //  border: 1px solid black;
    //border-collapse: collapse;
    //padding:10px
//}