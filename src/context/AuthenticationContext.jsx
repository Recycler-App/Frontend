import React, { createContext } from 'react'
import { initializeApp } from 'firebase/app'
// import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

export const AuthenticationContext = createContext()

const AuthenticationContextProvider = ({ children }) => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyB-QBco-p1ZSwPr4JNLi1LwYfr4gxF0JrI',
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
  // const db = getDatabase(app);
  return (
    <AuthenticationContext.Provider
      value={{
        firebaseConfig,
        auth,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
