import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { LoggedUserType } from '../types'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { onAuthStateChanged } from 'firebase/auth'

const UserContext: any = createContext({})

const UserContextProvider = ({ children }: any) => {
  const storage = window.localStorage
  const localUser = storage.getItem('googleUser')
  const [user, setUser] = useState<any>(
    localUser ? JSON.parse(localUser) : null
  )
  const [profile, setProfile] = useState<any>(null)
  const [type, setType] = useState<LoggedUserType>()

  const { auth } = useContext(AuthenticationContext)

  // FETCH GOOGLE USER DETAILS
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          setProfile(res.data)
          setType('GOOGLE_AUTH_USER')
        })
        .catch((err) => console.log(err))
    }
  }, [user])

  // FETCH FIREBASE USER DETAILS
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setProfile(user)
      setType('FIREBASE_USER')
    })
  })

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        storage,
        type,
        setType,
      }}
    >
      {console.log(profile)}
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)
export default UserContextProvider
