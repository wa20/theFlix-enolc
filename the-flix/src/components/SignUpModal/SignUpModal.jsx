import React from 'react'
import styles from './styles.module.css'

function SignUpModal() {

  const register = (e) => {
    e.preventDefault();

  }

  const signIn = (e) => { 
    e.preventDefault()

  }

  return (
    <div className={styles.signUpModal}>
       <form>
         <h1>Sign In</h1>
         <input placeholder='Email' type='email' />
         <input placeholder='Password' type='password'/>
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