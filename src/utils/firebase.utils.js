import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore";
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, 
    onAuthStateChanged,
 } from "firebase/auth";

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


//this stores values in the firestore database
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = collection(db, collectionKey)

    const batch = writeBatch(db);


    objectsToAdd.forEach(object => {

        const docRef = doc(collectionRef, object.title.toLowerCase());

        batch.set(docRef, object);
    })

    await batch.commit();

    //console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');

    const q = query(collectionRef);

    const querySnapshot  = await getDocs(q);
    return querySnapshot.docs.map((docSnapShot) => docSnapShot.data());

    //updating this to only return the categories array

   /*  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {

        const {title, items} = docSnapShot.data();

        acc[title.toLowerCase()] = items;

        return acc;

    }, {})

    return categoryMap; */
}


const provider = new GoogleAuthProvider(); // this is the google provider there are other providers like facebook
provider.setCustomParameters({
    prompt: 'select_account'
})


export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
//export const signInWithEmailPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);


export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    if(!userAuth) return;

    //console.log(userAuth);

    const userDocRef = doc(db, 'users', userAuth.uid);

    //console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    //console.log(userSnapshot);
    //console.log(userSnapshot.exists()); //you can use exists method to see if that reference already exists in the database

    if(!userSnapshot.exists()){
        //create user
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef ,{displayName, email, createdAt, ...additionalInfo});
        }
        catch(error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUser = async (email, password) => {

    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)

}

export const signOutAuthUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
