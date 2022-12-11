
import { useState } from "react";
import { signInWithGooglePopUp, signInAuthUser, createUserDocumentFromAuth} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signInAuthUser(email, password);
            resetFormFields();
        }
        catch(error){
            if(error.code === 'auth/wrong-password') alert('Incorrect password');

            else if(error.code === 'auth/user-not-found') alert('No user associated with this email');

            else console.log(error);
        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopUp();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-in-container">
            <h2>I already have an Account</h2>
            <span>Sign in with your email and password</span>

           <form onSubmit={handleSubmit}>
            <FormInput label='Email' onChange={handleChange} name='email' value={email} type='text' required/>
            <FormInput label='Password' onChange={handleChange} name='password' value={password} type='password' required/>
            <div className="buttons-container">
                <Button type='submit' buttonType='default'>Sign In</Button>
                <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
            </div>
           </form>
        </div>
    )
    
}

export default SignInForm;