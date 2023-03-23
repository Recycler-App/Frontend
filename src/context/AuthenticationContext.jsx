import React, { createContext, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const AuthenticationContext = createContext()

const AuthenticationContextProvider = ({ children }) => {
  const [namee, setNamee] = useState('')
  const [state, setState] = useState([])
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  console.log(namee)

  return (
    <AuthenticationContext.Provider
      value={{
        firebaseConfig,
        auth,
        setNamee,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
