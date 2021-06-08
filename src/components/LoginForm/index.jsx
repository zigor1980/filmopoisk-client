import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import '../styles.css';

const LoginForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <div className="form__footer">
        <Link to="/sign-up">Sign up</Link>
        <button className="form__button form__button--submit" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
