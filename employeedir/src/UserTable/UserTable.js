import React from "react"

function UserTable(props) {
 const employees =  props.employees.map(employee => {
     return (
        <tr>
         <td>{employee.name.first}</td>
         <td>{employee.gender}</td>
         <td>{employee.location.city + "," + employee.location.country}</td>
        </tr> 

     )
    })
    return (
        <table>
         <tr>
             <th>Name</th>
             <th>Gender</th>
            <th>Location</th>
            
         </tr>
         {employees}
        </table>
    )
}


export default UserTable