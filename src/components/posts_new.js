import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field; //nested destructuring ES6
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    //this is the same as below: 
				    // onChange={field.input.onChange}
				    // onFocus={field.input.onFocus}
				    // onBlur={field.input.onBlur}

                />
                <div className="text-help">
                    {touched ? error : ' '}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        // this line wire up to our back-end API( call an action creator to make API request)
        // pass a callback function to wait until our newpost is created and posted in the specified route
        this.props.createPost(values, () => {
             // if we call push with route, this line will be executed and we will automatically navigate back to
             // the big list of posts, that's what exist at our root route. ('/')
            // string here must match to one of the route in our applicatio.
            this.props.history.push('/');

        });
    }

    render() {
        const { handleSubmit } = this.props;
         // Field component is used to represent  a distinct input  that will be visible on screen to our users
         // name property specifies exactly what piece of state this field is going to produce
         // component property is a function that returns some amount of JSX
        return (
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
               <button type="submit" className="btn btn-primary">Submit</button>

               {/* we used Link tag to navigate around to different components inside our application */}
               {/* Link tag is react component that is used to generate an anchored tag that renders in the DOM (HTML Document) */}
               {/* We do not need to Link tag be created that the user has to click to navigate back to the last screen */}
               {/* after the post has been created */}
               {/* we want to automatically navigate the user the instant we know that the Post has been created successfully. */}
               {/* so we refer to this as programmatic navigation, and Link tag is not for programmatic navigation */}
               <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values
    if(!values.title) {
        errors.title = "Enter a title!";
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
})(
    connect(null, { createPost }) (PostsNew)
);