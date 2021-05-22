import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../actions";
import CreateEmployee from "./createEmployee";
import EditEmployee from "./editEmployee";
import DeleteEmployee from "./deleteEmployee";
import Employee from "./employee";
import { Message, Button } from "./styled/Forms";
import { Grid, Card } from "./styled/Grid";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

const App = () => {

  //Display states
  const employees = useSelector((state) => state.EmployeeReducer.employees);

  const dispatch = useDispatch();

  const employeeList = () => {
    const employeeList = employees.map( (item) => (
          <Card>
        <Employee  id= {item.id} name={item.name} gender={item.gender} salary={item.salary} dateOfBirth={item.dateOfBirth}/>
          </Card>
    ));
    return employeeList;
  };

  return (
    <div className="App">
    <Router>
    <Switch>
     <Route exact path="/">
      <Message className="employeelists">
        CRUD from Node Express API
      </Message>
      <br />
      <Button primary onClick={() => dispatch(fetchEmployees())}>Click to see posts</Button>
            <CreateEmployee />
         </Route>
          <Route  path="/edit">
              <EditEmployee/>
          </Route>
          <Route  path="/delete">
              <DeleteEmployee/>
          </Route>
        </Switch>

        {employees.length > 0 ? (
          <Grid>
            {employeeList()}
          </Grid>

        ) : (
          ""
        )}
    </Router>
      </div>

  );
};
export default App;
