import React, { useState } from 'react'
import {app,provider} from '../component/FireBase'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithRedirect,signOut } from "firebase/auth";

const LandingScreen = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [user, SetUser] = useState({});

    const auth=getAuth()

    async function signUp(){
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            alert("user added")
            setEmail("")
            setPassword("")
        } catch(err){
            alert(err.message)
        }
            
    }
    async function logIn(){
        try{

           const result= await signInWithEmailAndPassword(auth,email,password)
            alert("user login")
            setEmail("")
            setPassword("")
            SetUser({
                email: result.user.email,
                uid: result.user.uid,
              });
        }catch(err){
            alert(err.message)
        }
    }
    async function signUpWithGoogle(){
        await signInWithRedirect(auth, provider);
    }

    const logOut = async () => {
        try {
        await signOut(auth);
        alert("user logOut")
        setEmail("")
            setPassword("")
        SetUser({});
        } catch (err){
          console.error(err);
        }
      }


  return (
    <div className='h-screen flex justify-center items-center'>
        <div>
        <div className='py-5 flex justify-center gap-5 flex-col'>
        <input className='border-2 border-gray-600 px-3 py-1 rounded-md' type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <input className='border-2 border-gray-600 px-3 py-1 rounded-md' type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className='flex justify-center gap-5'>
        <button className='border bg-blue-500 hover:bg-blue-600 text-white px-5 py-1 rounded-md' onClick={signUp}>Sign Up</button>
        <button className='border bg-blue-500 hover:bg-blue-600 text-white px-5 py-1 rounded-md' onClick={logIn}>LogIn</button>
        <button className='border bg-blue-500 hover:bg-blue-600 text-white px-5 py-1 rounded-md' onClick={signUpWithGoogle}>Sign Up with google</button>
        </div>
        
        <div className='py-10 flex flex-col justify-center items-center gap-3'>
          <p>Email:- {user.email}</p>
          <p>Uid:- {user.uid}</p>
          <button className='border bg-blue-500 hover:bg-blue-600 text-white px-5 py-1 rounded-md' onClick={logOut}>Logout</button>
        </div>
        </div>
      
    </div>
  )
}

export default LandingScreen
