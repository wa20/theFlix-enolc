import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux"
import { selectUser } from "../../features/userSlice";
import { authUser } from "../../../firebase"

function ProfileScreen() {
  const user = useSelector(selectUser);

  const handleClick = () => {
    authUser.signOut()
  }

  return (
    <div className={styles.profileScreen}>
      <Navbar />

      <div className={styles.profileScreenBody}>
        <h1>Edit Profile</h1>
        <div className={styles.profileScreenInfo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Classic Blue Avatar"
            className={styles.avatar}
          />
           <div className={styles.profileScreenDetails}>
           <h2>{user.email}</h2>
           <div className={styles.profileScreenPlans}>
            <h3>
              Plans
            </h3>

            <button onClick={handleClick} className={styles.signOutBtn}>Sign Out</button>
           </div>
        </div>
        </div>
       

      </div>
    </div>
  );
}

export default ProfileScreen;
