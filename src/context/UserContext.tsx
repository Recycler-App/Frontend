import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { getDatabase, ref, get} from "firebase/database";
import { Flex, Image, useToast } from '@chakra-ui/react';
import Loader from "../assets/loader.gif"

const UserContext: any = createContext({})

const UserContextProvider = ({ children }: any) => {
  const toast = useToast()
  const storage = window.localStorage;
  const [user, setUser] = useState<any>(null); //firebase user object
  const [profile, setProfile] = useState<any>(null) //user profile
  const [userLoading, setUserLoading ] = useState(true)
  const { auth } = useContext(AuthenticationContext)

  useEffect(()=> {
    setUserLoading(true)
    onIdTokenChanged(auth, async (user) => {
        if(!user){
          setUser(null)
          storage.setItem("recyclerToken", "")
        }else {
          const token = await user.getIdToken();
          setUser(user)
          storage.setItem("recyclerToken",token)
        }
        setUserLoading(false)
    })
  },[auth, storage])

  useEffect(()=>{
    setUserLoading(true)
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
        setUserLoading(false)
      });
     
  }, [auth])

  const getUserProfile = useCallback((id:string) => {
    setUserLoading(true)
    // check if user exists in the database
    const db:any = getDatabase();
    const userRef = ref(db, `users/${id}`);
    get(userRef).then((snapshot:any) => {
      if(snapshot.exists()) {
        setProfile(snapshot.val())
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
      setUserLoading(false)
    })
  },[toast])


  useEffect(()=> {
    if(user){
      getUserProfile(user.uid)
    }
  }, [user, getUserProfile])

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
      {userLoading ? 
      <Flex justify="center" alignItems="center" h="100vh">
        <Image src={Loader}/>
      </Flex>
      :
      children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)
export default UserContextProvider
