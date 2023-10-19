import React, { useEffect, useState } from 'react'
import './Login.css'
import { _getQuestions, _getUsers } from '../_DATA';
import { useDispatch, useSelector } from 'react-redux';
import { setAllUsers, setUserLogin } from '../Slices/UserSlices';
import { useNavigate } from 'react-router-dom';
import { setAllQuestions } from '../Slices/QuestionsSlices';

export default function Login() {
    const [user, setUser] = useState({ user: "", password: "" });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector(state => state.user.allUser)
    const url = useSelector(state => state.user.url)
    const urlLocation = url !== "/login" ? url : "/"

    const handleChangeInput = (e, type) => {
        setUser({ ...user, [type]: e.target.value })
    }

    const handleOnSubmit = () => {
        if (!userInfo[user.user]) {
            alert("User invalid!!")
        } else if (userInfo[user.user].password !== user.password) {
            alert("Password invalid!!")
        } else {
            dispatch(setUserLogin(userInfo[user.user]))
            navigate(urlLocation)
        }
    }

    useEffect(() => {
        _getQuestions().then(data => {
            dispatch(setAllQuestions(data))
        });
        _getUsers().then(data => {
            dispatch(setAllUsers(data))
        })
    }, [])


    return (
        <div className='login_container'>
            <div>
                <div className='login'>Nguyen Tan Duy</div>
                <div className='login'>Login</div>
                <div>
                    <div>
                        <p>User</p>
                        <input placeholder='User' onChange={(e) => handleChangeInput(e, "user")} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input placeholder='Password' onChange={(e) => handleChangeInput(e, "password")} />
                    </div>
                    <div className='button_submit'>
                        <button onClick={handleOnSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
