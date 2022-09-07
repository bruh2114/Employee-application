import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./emp-data.json";
import Display from "./component/display";
import EditEmployee from "./component/editEmployee";

const App = () => {
  const [employees, setEmployees] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    position: "",
    employeeNumber: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    position: "",
    employeeNumber: "",
  });

  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: nanoid(),
      fullName: addFormData.fullName,
      position: addFormData.position,
      employeeNumber: addFormData.employeeNumber,
    };

    const newEmployees = [...employees, newEmployees];
    setEmployees(newEmployees);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedEmployee = {
      id: editEmployeeId,
      fullName: editFormData.fullName,
      position: editFormData.position,
      employeeNumber: editFormData.employeeNumber,
    };

    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === editEmployeeId);

    newEmployees[index] = editedEmployee;

    setEmployees(newEmployees);
    setEditEmployeeId(null);
  };

  const handleEdit = (e, employee) => {
    e.preventDefault();
    setEditEmployeeId(employee.id);

    const formValues = {
      fullName: employee.fullName,
      position: employee.position,
      employeeNumber: employee.employeeNumber,
    };

    setEditFormData(formValues);
  };

  const handleCancel = () => {
    setEditEmployeeId(null);
  };

  const handleDelete = (employeeId) => {
    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === employeeId);

    newEmployees.splice(index, 1);

    setEmployees(newEmployees);
  };


  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Employee Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <Fragment>
                {editEmployeeId === employee.id ? (
                  <EditEmployee
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancel={handleCancel}
                  />
                ) : (
                  <Display
                  employee={employee}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add an Employee</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="position"
          required="required"
          placeholder="Enter a work position..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="employeeNumber"
          required="required"
          placeholder="Enter a employee number..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;