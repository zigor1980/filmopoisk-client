import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import '../styles.css';

const SignUpForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit,
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          name="lastName"
          type="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="form__footer">
        <Link to="/login">Back to login</Link>
        <button className="form__button form__button--submit" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignUpForm;
