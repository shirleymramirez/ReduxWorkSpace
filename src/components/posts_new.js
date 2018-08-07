import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.imput}
                />
            </div>
        );
    }


    render() {
         // Field component is used to represent  a distinct input  that will be visible on screen to our users
         // name property specifies exactly what piece of state this field is going to produce
         // component property is a function that returns some amount of JSX
        return (
           <form>
               <Field
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
               />
               <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
               />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
               />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values
    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is atleast 3 charaters!";
    }

    if(!values.categories) {
        errors.categories = "Enter some categories!";
    }

    if(!values.content) {
        errors.content = "Enter some content!";
    }

    // If errors is empty, the form is fine to submit
    // If errors has  *any* properties, redux form  assumes form is invalid
    return errors;
}

// a helper that's going to  allow  redux form to communicate  directly from the component
// to the reducers that we set up
export default reduxForm({
    validate,
    form: 'PostsNewForm'
}) (PostsNew);