import React from "react";

const EditEmployee = ({
  editFormData,
  handleEditFormChange,
  handleCancel,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter work position..."
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter employee number..."
          name="employeeNumber"
          value={editFormData.employeeNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditEmployee;