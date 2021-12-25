import React from "react";
import { Form, Field } from "react-final-form";
import MyField from "./MyField";



const composeValidators = (validators) => (value, allValues) => {
    let error = undefined;
    for (let i = 0; i < validators.length; i++) {
      error = validators[i](value, allValues);
      if (error) {
        return error;
      }
    }
  };

const commonValidators = {
  required: (value = "") => {
    return value.length > 0 ? undefined : "Required";
  },

  sixSymbols: (value, allValues) => {
    return value.length > 5 ? undefined : "Too short";
  },

  comparePasswords: (value, allValues) => {
    return allValues.password === allValues.confirm
      ? undefined
      : "Password don`t match";
  },
};

const validators = {
  name: composeValidators([commonValidators.required,commonValidators.sixSymbols]),
  email: composeValidators([commonValidators.required,commonValidators.sixSymbols]),
  password: composeValidators([commonValidators.required,commonValidators.sixSymbols]),
  confirm:  composeValidators([commonValidators.required,commonValidators.sixSymbols,commonValidators.comparePasswords]),
};

class Signup extends React.Component {
  state = {
    fields: {
      name: {
        name: "name",
        type: "text",
        title: "Name",
        placeholder: "John Smith",
        label: "Name",
        validators: [this.required, this.sixSymbols],
      },
      emailText: {
        name: "email",
        type: "text",
        title: "Email",
        placeholder: "example@ex.net",
        label: "Email",
      },
      passwordText: {
        name: "password",
        type: "password",
        title: "Password",
        placeholder: "Qwe123",
        autoComplete: "false",
        label: "Password",
      },
      confirmPasswordText: {
        name: "confirm",
        type: "password",
        title: "Confirm Password",
        placeholder: "Qwe123",
        autoComplete: "false",
        label: "Confirm Password",
      },
    },
  };

  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <div className="wrapper">
                  <div className="title">Form</div>
                  <form onSubmit={handleSubmit} className="boxSignUp" id="boxSignUp">
                      <h1 className="boxh">Sign Up</h1>
                {Object.entries(this.state.fields).map(
                  ([fieldName, fieldState]) => {
                    return (
                        <Field
                          validate={validators[fieldState.name]}
                          name={fieldState.name}
                          component={MyField}
                          title={fieldState.title}
                          key={fieldState.title}
                          type={fieldState.type}
                          label={fieldState.label}
                          className="boxinput"
                          placeholder={fieldState.placeholder}
                          autoComplete={fieldState.autoComplete}
                        ></Field>
                    );
                  }
                )}
                <button type="submit" className="buttonBox" disabled={submitting}>
                  {" "}
                  Submit{" "}
                </button>
              </form>
            </div>
          )}
        />
      </>
    );
  }
}

export default Signup;
