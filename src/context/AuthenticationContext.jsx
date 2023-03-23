import React, { createContext, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const AuthenticationContext = createContext()

const AuthenticationContextProvider = ({ children }) => {
  const [namee, setNamee] = useState('')
  const [state, setState] = useState([])
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: 'recycler-app-a97f0.firebaseapp.com',
    databaseURL: 'https://recycler-app-a97f0-default-rtdb.firebaseio.com',
    projectId: 'recycler-app-a97f0',
    storageBucket: 'recycler-app-a97f0.appspot.com',
    messagingSenderId: '326464623320',
    appId: '1:326464623320:web:15e93996759284891e7dad',
    measurementId: 'G-2QV7JSSRXT',
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  console.log(namee);

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
