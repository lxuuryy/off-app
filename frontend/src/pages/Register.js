import React from 'react'
import { useNavigate } from 'react-router-dom';

import {UserContext} from '../cartContext/UserContext'

import { FcGoogle } from "react-icons/fc";

import 'firebase/auth';




import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup  } from "firebase/auth";



const provider = new GoogleAuthProvider();




export default function Register(){

    const { setUser, setName} = React.useContext(UserContext)

    const navigate = useNavigate();
    //fit-site-2f32f.firebaseapp.com
  
    const provider = new GoogleAuthProvider();


    const firebaseConfig = {
        apiKey: "AIzaSyBwOnItek-8wvT6IvRPP9N-RjhB_NENjaQ",
        authDomain: "fit-site-2f32f.firebaseapp.com",
        projectId: "fit-site-2f32f",
        storageBucket: "fit-site-2f32f.appspot.com"}


        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
 
    
    
    
      async function handleSubmit(event){

            event.preventDefault()
        const email = signUp.email
        const password = signUp.password


        await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    if(user){
        console.log('Youre signed up')
        navigate('/shop')
       
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ..
  });

 
  



}    


async function handleGoogleSignIn() {

  const currentUser = auth.currentUser;
   
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google Sign-In Successful', user);
      
      if(user){
        setUser(user.accessToken)
        navigate('/shop');
        localStorage.setItem('picture', JSON.stringify(user.photoURL))
        localStorage.setItem('user', JSON.stringify(user.accessToken))
        setName(user.displayName)
        localStorage.setItem('name', JSON.stringify(user.displayName))
        
        console.log('Youre signed up with displayName:', user.displayName);
        
        
        
      }
      // You can handle the signed-in user here
    } catch (error) {
      console.error('Google Sign-In Error', error);
      // Handle errors here
    }
  }




  

    
        const [signUp, setSignUp] = React.useState({

            email: "",
            password: "",
        })
    
       
    
        function handleChange(event){
            const { name, value, type, checked} = event.target
            setSignUp(prevData => {
                return {
                    ...prevData,
                    [name] : type === "checkbox" ? checked : value
                }
            })
        }
    
        
    
       
    
    
    
        return (
            <div className="register--form"> 
            <div className="register--form--children">
              <form className="credentials--container">
                <h1>REGISTER HERE</h1>
                
                <input
                  type="text"
                  name="email"
                  value={signUp.email}
                  onChange={handleChange}
                  placeholder='Email'
                />
                
                <input
                  type="password"
                  name="password"
                  value={signUp.password}
                  onChange={handleChange}
                  placeholder='Password'
                />

            <div className='signUp--buttons'>
                <button  onClick={handleSubmit}>
                  REGISTER
                </button>

                <button className="google--button" type="button" onClick={handleGoogleSignIn}>
<FcGoogle style = {{ fontSize: '20px', padding:'0px 15px', textAlign: 'center'}}/>
             SIGN UP WITH GOOGLE
      </button>
      </div>
     
    </form>
    </div>
  </div>
              
          );
        }