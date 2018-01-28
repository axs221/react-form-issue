import React from "react";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {connect} from "react-redux";

let TestForm = props => {
  console.warn("ZZZZ App.js", "props.values", props.values)
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component="input" type="text" />
      Test
    </form>
  );
};

const selector = formValueSelector("test-form");

TestForm = connect(state => {
  return {
    values: {
      firstName: selector(state, "firstName")
    }
  };
})(TestForm);

TestForm = reduxForm({
  form: "test-form",
})(TestForm);

export default TestForm;
