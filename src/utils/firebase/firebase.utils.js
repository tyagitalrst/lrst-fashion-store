// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTrOt4E8aUPgYRqgT-2hW0jYcdm4Ii9Zc",
  authDomain: "lrst-fashion-shop-db.firebaseapp.com",
  projectId: "lrst-fashion-shop-db",
  storageBucket: "lrst-fashion-shop-db.appspot.com",
  messagingSenderId: "431499309302",
  appId: "1:431499309302:web:5ad2d76821a5df57093cd7",
  measurementId: "G-KX6CB4757M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/**
 * GoogleAuthProvider is a class
 */

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
     const { displayName, email } = userAuth;
     const createdAt = new Date();

     try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
     } catch (error) {
      console.error('error creating the user', error.message);
     }
  }
  
  return userDocRef;
}