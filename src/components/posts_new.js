import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
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
                    name="title"
                    component={this.renderTitleField}
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