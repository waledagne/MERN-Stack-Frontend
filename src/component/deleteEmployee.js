import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../actions";
import { Form, Label, Input, Button,Message } from "./styled/Forms";

const DeleteEmployee = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    _id: "",
  });

  //Destructuring ID
  const { _id } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteEmployee({ _id }));
  };

  return (
    <div>
     <Message className="employeelists">
        Delete An Employee
      </Message>
      <Form onSubmit={onSubmit}>
        <div>
          <Label>ID: </Label>
          <br />
          <Input
            type="text"
            name="_id"
            placeholder="Insert ID to Delete"
            onChange={onChange}
            value={_id}
          />
        </div>

        <Button type="submit">Delete Employee</Button>
      </Form>
    </div>
  );
};
export default DeleteEmployee;
