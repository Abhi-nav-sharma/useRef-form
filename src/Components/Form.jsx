import { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    role: "",
    maritalStatus: false,
    image: ""
  });
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormState({
      ...formState,
      [name]: val
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormState({ ...formState, image: file });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name- </label>
      <input
        type="text"
        value={formState.name}
        name="name"
        onChange={handleChange}
      />
      <br />
      <br />
      <label>Gender- </label>
      <select name="gender" value={formState.gender} onChange={handleChange}>
        <option value="" key="1">
          Select a gender
        </option>
        <option value="M" key="male">
          M
        </option>
        <option value="F" key="female">
          F
        </option>
      </select>
      <br />
      <br />
      <label>Role- </label>
      <select name="role" value={formState.role} onChange={handleChange}>
        <option value="" key="1">
          Select a role
        </option>
        <option value="Trainee" key="trainee">
          Trainee
        </option>
        <option value="Student" key="student">
          Student
        </option>
        <option value="Employee" key="employee">
          Employee
        </option>
      </select>
      <br />
      <br />
      <label>Marital status- </label>
      <input
        name="maritalStatus"
        checked={formState.maritalStatus}
        onChange={handleChange}
        type="checkbox"
      />
      <br />
      <br />
      <label>Image- </label>
      <input type="file" onChange={handleImageChange} />
      <br />
      <br />
      <input value="Submit" type="submit" />
    </form>
  );
};
export default Form;
