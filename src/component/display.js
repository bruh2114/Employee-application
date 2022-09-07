import React from "react";

const Display = ({ employee, handleEdit, handleDelete, }) => {
  return (
    <tr>
      <td>{employee.fullName}</td>
      <td>{employee.position}</td>
      <td>{employee.employeeNumber}</td>
      <td>
        <button type="button" onClick={(e) => handleEdit(e, employee)}>Edit</button>
       
        <button type="button" onClick={() => handleDelete(employee.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Display;