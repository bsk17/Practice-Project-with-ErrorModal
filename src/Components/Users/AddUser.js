import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // set initial state of username and age to '' then update using set function
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // set initial state of error to null then update using set function
  const [error, setError] = useState();

  // executes when username is changed
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  // executes when age is changed
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // executes when form is submitted
  const addUserSubmitHandler = (event) => {
    // preventing default reload and other activities
    event.preventDefault();

    // check for empty username or age
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // update error object to pass to Error Modal
      setError({
        title: "Invalid Input",
        message: "Please enter a Valid Name and Age (non-empty values).",
      });
      return;
    }
    //check for negative age
    if (+enteredAge < 0) {
      // update error object to pass to Error Modal
      setError({
        title: "Invalid Age",
        message: "Please enter a Valid Age ( > 0).",
      });
      return;
    }

    // pass the values to App.js where onAddUser is set as props to AddUser.js,
    // to add it to the already set List
    props.onAddUser(enteredUsername, enteredAge);

    // reset values of username and age
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onErrorHandler={errorHandler}
          errorTitle={error.title}
          errorMessage={error.message}
        ></ErrorModal>
      )}
      {/* // wrapper component Card */}
      <Card className={classes.input}>
        <form onSubmit={addUserSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
