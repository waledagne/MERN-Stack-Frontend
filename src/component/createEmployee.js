import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../actions";
import { Form, Label, Input, Button } from "./styled/Forms";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    salary: 0,
    dateOfBirth:""

  });

  //destructuring form data
  const { name, gender, salary,dateOfBirth } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      gender,
      salary,
      dateOfBirth
    };

    dispatch(createEmployee(newEmployee));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>Name: </Label>
          <br />
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
        <Button  primary type="submit">Create EMPLOYEE</Button>
      </Form>
    </div>
  );
};
export default CreateEmployee;
