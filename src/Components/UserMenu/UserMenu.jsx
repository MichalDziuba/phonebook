import {React,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../../Redux/reducers";
export const UserMenu = () => {
    const userName = useSelector(state => state.phonebook.userData.user.name) 
    const userToken = useSelector(state => state.phonebook.userData.token);
    console.log(userToken)
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.phonebook.userData.token);

    const logoutUser = () => {
        dispatch(asyncLogoutUser(token))
    }
    return (
        <div>
           <span> Hello {userName}</span>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}
