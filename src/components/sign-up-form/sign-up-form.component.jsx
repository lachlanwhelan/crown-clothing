import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert('passwords do not match')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword( email, password);
            console.log(user);

            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create use. Email already in use');
            }else{

                console.log('user creation encountered an error', error.message);
            }
        }
        

    }

    const handleChange = (e) => {

        const {name, value} = e.target;
        
        setFormFields({...formFields, [name]: value});

    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an Account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={onSubmit}>
                <FormInput label='Display Name' onChange={handleChange} name='displayName' value={displayName} type='text' required />
                <FormInput label='Email' onChange={handleChange} name='email' value={email} type='text' required />
                <FormInput label='Password' onChange={handleChange} name='password' value={password} type='password' required />
                <FormInput label='Confirm Password' onChange={handleChange} name='confirmPassword' value={confirmPassword} type='password' required />
                <Button>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;