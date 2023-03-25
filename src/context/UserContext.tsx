import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { getDatabase, ref, get} from "firebase/database";
import { useToast } from '@chakra-ui/react';

const UserContext: any = createContext({})

const UserContextProvider = ({ children }: any) => {
  const toast = useToast()
  const storage = window.localStorage;
  const [user, setUser] = useState<any>(null); //firebase user object
  const [profile, setProfile] = useState<any>(null) //user profile
  const { auth } = useContext(AuthenticationContext)

  useEffect(()=> {
    onIdTokenChanged(auth, async (user) => {
        if(!user){
          setUser(null)
          storage.setItem("recyclerToken", "")
        }else {
          const token = await user.getIdToken();
          setUser(user)
          storage.setItem("recyclerToken",token)
        }
        // setLoading(false)
    })
  },[auth, storage])

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
        // setLoading(false)
      });
     
  }, [auth])

  const getUserProfile = (id:string) => {
    // check if user exists in the database
    const db:any = getDatabase();
    const userRef = ref(db, `users/${id}`);
    get(userRef).then((snapshot:any) => {
      if(snapshot.exists()) {
        setProfile(snapshot.val())
        console.log(snapshot.val())
      } else {
        toast({
          title: 'OOPS!',
          description: "An error occured trying to fetch profile details",
          status: 'error',
          variant: 'left-accent',
          duration: 4000,
          isClosable: true,
        })
      }
    })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        storage,
        getUserProfile
      }}
    >
        {console.log(profile)}
        {console.log(user)}
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)
export default UserContextProvider
