import React, { useState } from "react";
import * as Yup from "yup";

import { Formik, Form, Field } from "formik";
import StyledInput from "components/Input";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Err = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          userName,
          email,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="userName">
              {({ field, form: { touched, errors }, meta }: any) => {
                console.log(field);
                return (
                  <div>
                    <StyledInput
                      label={"Телефон"}
                      shrink
                      isFullWidth
                      value={field.value}
                      onChange={(e: any) => setUserName(e.target.value)}
                    />
                    {errors.userName && touched.userName ? (
                      <div
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.userName}
                      </div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
            <Field name="email">
              {({ field, form: { touched, errors }, meta }: any) => {
                return (
                  <div>
                    <StyledInput
                      label={"E-mail"}
                      shrink
                      isFullWidth
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                    {errors.email && touched.email ? (
                      <div
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Err;
