import React from 'react';
import { withFormik, Form, Field,  ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
//## STEP 1 - Create Your Formik Form

//We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

//- Name
//- Email
//- Password
//- Terms of Service (checkbox)
//- A Submit button to send our form data to the server.


function TestingForm(props) {
 console.log(props)
 return (
    <div className="TestingForms">
      <Form>
        <ErrorMessage
          name="name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
         Name
          <Field
            type="text"
            name="name"
            placeholder="Enter your name here"
          />
        </label>

        <ErrorMessage
          name="email"
          render={msg => <div className="error">{msg}</div>}
        />
          <label>
         Email
          <Field
            type="text"
            name="email"
            placeholder="Enter your email here"
          />
        </label>

        <ErrorMessage
          name="password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password here"
          />
        </label>
        <label>
          Terms of Service
          <Field type="checkbox" name="terms_service" />
        </label>
        <input type="submit" />
      </Form>
    </div>
  );
}



const TestingFormWithFormik = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      terms_service: false,
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a name"),
    email: Yup.string().required("Please enter a email"),
    password: Yup.string().required("Please enter a password"),
    terms_service: Yup.boolean(),

 
  }),

  handleSubmit(values, tools) {
    // console.log(args);
    console.log(tools);
    
    axios.post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log(res.data);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(TestingForm);

export default TestingFormWithFormik;