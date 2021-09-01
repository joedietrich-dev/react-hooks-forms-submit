import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0) {
      const formData = { firstName, lastName };
      setSubmittedData([...submittedData, formData]);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
  const listOfErrors = errors.map((error, index) => (
    <p key={index} style={{ color: "red" }}>
      {error}
    </p>
  ))

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit" >Submit</button>
      </form>
      {errors.length > 0 && listOfErrors}
      <div>
        {listOfSubmissions}
      </div>
    </>
  );
}

export default Form;
