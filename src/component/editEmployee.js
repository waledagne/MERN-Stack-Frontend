import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editEmployee } from "../actions";
import { Form, Label, Input, Button,Message } from "./styled/Forms";

const EditEmployee = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    gender: "",
    salary: "",
    dateOfBirth: ""
  });

  //destructuring form data
  const { _id, name, gender, salary,dateOfBirth } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      _id,
      name,
      gender,
      salary,
      dateOfBirth
    };

    dispatch(editEmployee(newEmployee));
  };

  return (
    <div>
     <Message className="employeelists">
       Edit An Employee
      </Message>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>ID: </Label>
          <br />
          <Input
            type="text"
            name="_id"
            placeholder="Insert ID to edit"
            onChange={onChange}
            value={_id}
          />
        </div>
        <div>
        <Label>Name: </Label>
          <Input
            type="text"
            name="name"
            placeholder="Insert Name"
            onChange={onChange}
            value={name}
          />
        </div>
        <br />
        <div>
          <Label>Gender: </Label>
          <br />
          <Input
            type="text"
            name="gender"
            placeholder="Insert Gender"
            onChange={onChange}
            value={gender}
          />
        </div>
        <br />
        <div>
        <Label>Salary: </Label>
          <Input
            type="text"
            name="salary"
            placeholder="Insert Salary"
            onChange={onChange}
            value={salary}
          />
        </div>
        <br />
        <div>
        <Label>Date Of Birth: </Label>
          <Input
            type="text"
            name="dateOfBirth"
            placeholder="Insert your date of birth"
            onChange={onChange}
            value={dateOfBirth}
          />
        </div>
        <Button primary type="submit">Edit Employee</Button>
      </Form>
    </div>
  );
};
export default EditEmployee;
