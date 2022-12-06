import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth, signInWithGooglePopUp, signInWithGoogleRedirect } from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './signin.styles.scss';

const Signin = () => {
    //auth keeps track of authentication states - authentication memory even if page redirects
    //getredirectresult gets the response from redirect
    /*
        useEffect(() => {
        
            const someFunction =  async () => {
                const {user}  = await getRedirectResult(auth);
            
            if(user){               
                //store user in database
                const userDocRef = await createUserDocumentFromAuth(user);
            }
        }

        someFunction();

    }, [])
    */


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();

        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();

        const userDocRef = await createUserDocumentFromAuth(user);
    }
    
    return(
        <div className="auth-container">
{/*             <button onClick={logGoogleUser}>Sign in with google</button>
            <button onClick={logGoogleRedirectUser}>Sign in with google</button> */}
                <SignInForm/>
                <SignUpForm/>
        </div>
    )
}



export default Signin;