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
                    label="Title"
                    name="title"
                    component={this.renderField}
               />
               <Field
                    label="Tags"
                    name="tags"
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

// a helper that's going to  allow  redux form to communicate  directly from the component
// to the reducers that we set up
export default reduxForm({
    form: 'PostsNewForm'
}) (PostsNew);