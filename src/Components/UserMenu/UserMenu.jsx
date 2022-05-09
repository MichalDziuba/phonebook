import {React} from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../../Redux/reducers";
import styles from './UserMenu.module.css'
export const UserMenu = () => {
    const userName = useSelector(state => state.phonebook.userData.user.name) 
    const userEmail=useSelector(state=>state.phonebook.userData.user.email)
    const dispatch = useDispatch()
    const token = useSelector((state) => state.phonebook.userData.token);

    const logoutUser = () => {
        dispatch(asyncLogoutUser(token))
    }
    return (
      <div className={styles.userMenu__wrapper}>
        <button onClick={logoutUser} className={styles.button__logout}>
          Logout
        </button>

        <p className={styles.userMenu__info}> Hello {userName}!</p>
        <p className={styles.userMenu__info}>Your email: {userEmail} </p>
      </div>
    );
}
