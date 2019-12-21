import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { withFormik, Formik, Form, Field, ErrorMessage } from 'formik';


const UserForm = () => (

  <div className="UserForm">
    <h1>User Onboarding Form</h1>

    <Formik

      initialValues={{ name: '', email: '', password: '', confirmpassword: '', checkbox: '' }}
      validate={values => {

        const errors = {};
        if (!values.name) {
          errors.name = 'Name is required';
        } else if (values.name.length < 3) {
          errors.name = 'The name is too short - 3 charaters or more'
        }

        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 4) {
          errors.password = 'The password is too short - 4 charaters or more'
        }

        if (!values.confirmpassword) {
          errors.confirmpassword = 'Password needs to be confirmed';
        } else if (values.confirmpassword !== values.password) {
          errors.confirmpassword = 'You have entered 2 different passwords'
        }

        if (!values.checkbox) {
          errors.checkbox = 'Please agree to the Terms of Service';
        }

        return errors;

      }}

      onSubmit={(values, { setSubmitting }) => {
        //tools.resetForm();
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }

      }
    >
      {({ isSubmitting }) => (

        <div className="Form">
          <Form>
            <p>
              <label htmlFor="name">Name</label><br />
              <Field
                type="text"
                name="name"
                placeholder="enter your name"
              />
              <ErrorMessage name="name" component="div" className="message" />
            </p>

            <p>
              <label htmlFor="email">Email</label><br />
              <Field
                type="email"
                name="email"
                placeholder="enter your email"
              />
              <ErrorMessage name="email" component="div" className="message" />
            </p>

            <p>
              <label htmlFor="password">Password</label><br />
              <Field
                type="password"
                name="password"
                placeholder="enter your password"
              />
              <ErrorMessage name="password" component="div" className="message" />
            </p>

            <p>
              <label htmlFor="confirmpassword">Confirm Password</label><br />
              <Field
                type="password"
                name="confirmpassword"
                placeholder="confirm your password"
              />
              <ErrorMessage name="confirmpassword" component="div" className="message" />
            </p>

            <p>
              <label htmlFor="role">Select your role</label><br />
              <Field
                as="select"
                name="role"
                placeholder="select your role">
                <option value=""></option>
                <option value="project manager">Project Manager</option>
                <option value="web developer">Web Developer</option>
                <option value="designer">Designer</option>
                <option value="other">Other</option>
              </Field>
            </p>

            <p>
              <button type="submit" disabled={isSubmitting}>
                {
                  isSubmitting ? 'Submitting' : 'Submit'
                }
              </button>
            </p>

            <p>
              <label htmlFor="checkbox">Terms of Service</label>
              <Field
                type="checkbox"
                name="checkbox"
              />
              <ErrorMessage name="checkbox" component="div" className="message" />
            </p>

          </Form>
        </div>
      )}
    </Formik>

  </div>
);

export default UserForm;
