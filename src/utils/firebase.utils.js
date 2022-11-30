import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBOfdd5NDVRvriskzIByIH0BbCoHrcw9VM",
    authDomain: "crown-db-fa513.firebaseapp.com",
    projectId: "crown-db-fa513",
    storageBucket: "crown-db-fa513.appspot.com",
    messagingSenderId: "323526174674",
    appId: "1:323526174674:web:9c0e737f82e24e4ffa0a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app); 


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);


export const createUserDocumentFromAuth = async (userAuth) => {

    console.log(userAuth);

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists()); //you can use exists method to see if that reference already exists in the database

    if(!userSnapshot.exists()){
        //create user
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef ,{displayName, email, createdAt});
        }
        catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}