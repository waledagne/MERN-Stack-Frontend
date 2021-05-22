import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "../actions";
import { editEmployee } from "../actions";
import {Form,Button,Message } from "./styled/Forms";
import {Link } from "react-router-dom";



const Employee = (props) => {
  return (
    <div  key={props.id}>
      <h3>Name: {props.name}</h3>
      <h3>Gender:{props.gender}</h3>
      <h3>Salary:{props.salary}</h3>
      <h3>Date:{props.dateOfBirth}</h3>
      {/* <Button onClick={() => dispatch(deleteEmployee({ id }))}>Delete</Button> */}
      <Form>
      <Link to ='/edit'>
      <Button primary type="submit">Edit</Button>
      </Link>
      <Link to ='/delete'>
      <Button type="submit">Delete</Button>
      </Link>
      </Form>
</div>

  );
};
export default Employee;
