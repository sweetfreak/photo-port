import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
              } else {
                setErrorMessage('');
            }
        }    
                    //without the spread operation (...) it would only contain name:value key pair, no email or message
        if (!errorMessage){
           setFormState({...formState, [e.target.name]: e.target.value }) 
        }            
        
        // The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
        console.log('errorMessage', errorMessage);
        }
    
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        //Now a backend/fullstack developer must finish the rest, as in, create the database and such.
    }

    //jsx
    return (
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input, email input, message text area */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address::</label>
                    <input type="email"defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                    {/* could use a conditional, but here the && evaluates it instead */}
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage} </p>
                        </div>
                    )}
                </div>
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;