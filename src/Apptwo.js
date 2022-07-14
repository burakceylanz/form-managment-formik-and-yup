import "./App.css";
import React from "react";
import {  useFormik } from "formik";
import validationSchema from "./components/validations";

const SignupFormtwo = () => {
  const {handleBlur,handleChange,handleSubmit,values,errors,touched} = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
    validationSchema,
  });

  return (
    <div className="App">
      <h1>Sign Up with Password Form 2</h1>
      <form>
        <label htmlFor="email"><b>Email:</b></label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (<div className="error">{errors.email}</div>)}
        <br></br>
        <br></br>
        <label htmlFor="password"><b>Password:</b></label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (<div className="error">{errors.password}</div>)}
        <br></br>
        <br></br>
        <label htmlFor="passwordConfirm"><b>Password Confirm:</b></label>
        <input
          name="passwordConfirm"
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.passwordConfirm && touched.passwordConfirm && (<div className="error">{errors.passwordConfirm}</div>)}
        <br></br>
        <br></br>
        <button onClick={handleSubmit} type="submit">
          Submit    
        </button>

        <br></br>
        <br></br>
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
};

export default SignupFormtwo;
