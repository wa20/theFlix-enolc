import {useRef} from 'react'

import styles from './styles.module.css'
import { authUser } from '../../../firebase'

function SignUpModal() {

  const emailRef = useRef()
  const passwordRef = useRef()

  const register = (e) => {
    e.preventDefault();

    authUser.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((auth) =>{
        console.log('§ sign up', {auth})
    }).catch(error => {
      alert(error)
    })
  }

  const signIn = (e) => { 
    e.preventDefault()

    authUser.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then( auth => {
      console.log('§ sign in', {auth})
    }).catch(error => {
      alert(error)
    })
  }

  return (
    <div className={styles.signUpModal}>
       <form>
         <h1>Sign In</h1>
         <input ref={emailRef} placeholder='Email' type='email' />
         <input ref={passwordRef} placeholder='Password' type='password'/>
         <button 
          onClick={signIn}
          type='submit'>
            Sign In
          </button> 
         <h4> 
            <span className={styles.newToFlix}>New to Netflix</span> 
            <span className={styles.newToFlixLink} onClick={register}> Sign Up Now</span>.
          </h4>
       </form>
    </div>
  )
}

export default SignUpModal