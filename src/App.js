import "./App.css";
import React from "react";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";

const SignupForm = () => {

        const formik = useFormik({
     
          initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "male",
            hobies:[],
            country:"Turkey",
          },
     
          onSubmit: values => {
     
            alert(JSON.stringify(values, null, 2));
            console.log(values)
     
          },
     
        });

  return (
    <div className="App">
      <h1>Sign Up Form 1</h1>
      <Link to={'/form-two'} className="form-two">Form 2</Link>
          <form>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onChange={formik.handleChange} />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" onChange={formik.handleChange} />

            <label htmlFor="email">Email</label>
            <input name="email" onChange={formik.handleChange} />
            <br></br>
            <br></br>
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              checked={formik.values.gender==="male"}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={formik.handleChange}
            />
             <br></br>
            <br></br>
            <div>Football
            <input type="checkbox" name="hobies" value="Football" onChange={formik.handleChange} />
            </div>
            <div>Swim
            <input type="checkbox" name="hobies" value="Swim" onChange={formik.handleChange} />
            </div>
            <div>Netflix
            <input type="checkbox" name="hobies" value="Netflix" onChange={formik.handleChange} />
            </div>

            <br></br>
            <br></br>
            <select name="country" onChange={formik.handleChange}>
                <option value="Turkey">Turkey</option>
                <option value="England">England</option>
                <option value="Spain">Spain</option>
                <option value="Germany">Germany</option>
            </select>
            <br></br>
            <br></br>
            <button onClick={formik.handleSubmit} type="submit">
              Submit
            </button>

            <br></br>
            <br></br>
            <code>{JSON.stringify(formik.values)}</code>
          </form>
          </div>
  );
};

export default SignupForm;