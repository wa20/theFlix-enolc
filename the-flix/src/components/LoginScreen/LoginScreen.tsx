import {useState} from 'react'
import styles from './styles.module.css'
import { sign } from 'node:crypto';
import SignUpModal from '../SignUpModal/SignUpModal';

function LoginScreen() {
 const [signIn, setSignIn] = useState(false);



  return (
    <div className={styles.loginScreen}>
        <div className={styles.loginScreenContainer}>
            <img 
                className={styles.loginScreenLogo}
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Background"  
                />
                <button 
                className={styles.loginScreenButton}
                onClick={() => setSignIn(true)}>
                Sign In
                </button>
                <div className={styles.loginScreenGradient}></div>
        </div>

        <div className={styles.loginScreenBody}>
            {signIn ? (
                <SignUpModal />
            ) : 
            <>
             <h1>Unlimited films, TV programmes and more.</h1>
             <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className={styles.loginScreenInput}>  
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button 
                        className={styles.loginScreenSubmitBtn}
                        onClick={() => setSignIn(true)}>
                            GET STARTED
                        </button>
                    </form>
                </div>
            </>
            }
        </div>
 
    </div>
  )
}

export default LoginScreen