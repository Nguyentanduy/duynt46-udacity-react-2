import React, { useEffect, useState } from 'react'
import './Login.css'
import { _getQuestions, _getUsers } from '../_DATA';
import { useDispatch, useSelector } from 'react-redux';
import { setAllUsers, setUserLogin } from '../Slices/UserSlices';
import { useNavigate } from 'react-router-dom';
import { setAllQuestions } from '../Slices/QuestionsSlices';

export default function Login() {
    const [user, setUser] = useState({ user: "", password: "" });
    const [isSuccess, setIsSuccess] = useState(false);
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
        } else if (userInfo[user.user].password !== user.password) {
        } else {
            setIsSuccess(true);
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
                <div data-testid='login-success'>{isSuccess && "Login Successfully!"}</div>

                <p></p>
                <div>
                    <div>
                        <p>User</p>
                        <input data-testid='user' placeholder='User' onChange={(e) => handleChangeInput(e, "user")} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input data-testid='password' placeholder='Password' onChange={(e) => handleChangeInput(e, "password")} />
                    </div>
                    <div className='button_submit' >
                        <button data-testid='submit' onClick={handleOnSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
