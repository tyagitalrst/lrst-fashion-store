import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"

import { 
  auth, 
  signInWithGooglePopUp, 
  signInWithGoogleRedirect, 
  createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils"


const SignIn = () => {
  /**
   * Empty array in useEffect means:
   * Run this function once, when the component
   * mounts for the first time
   */
  useEffect(() => {
    (async function fetchData() {
      const response = await getRedirectResult(auth)

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
   
    })()
  }, [])


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp()
    const userDocRef = await createUserDocumentFromAuth(user)
  }


  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={ logGoogleUser }>
        Sign in with Google PopUp
      </button>
      <button onClick={ signInWithGoogleRedirect }>
        Sign in with Google Redirect
      </button>
    </div>
  )
}

export default SignIn