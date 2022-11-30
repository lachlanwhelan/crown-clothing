import { auth, createUserDocumentFromAuth, signInWithGooglePopUp } from "../../utils/firebase.utils";

const Signin = () => {


    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();

        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return(
        <div>
            SIGNIN
            <button onClick={logGoogleUser}>Sign in with google</button>
        </div>
    )
}

export default Signin;