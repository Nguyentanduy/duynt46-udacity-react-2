import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import './style.css'
import { _saveQuestion } from '../_DATA';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createQues } from '../Slices/UserSlices';

export default function New() {

  const [data, setData] = useState({ option1: "", option2: "" });
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChangeInput = (e, type) => {
    setData({ ...data, [type]: e.target.value })
  }
  const handleSubmit = () => {
    if (data.option1 && data.option2) {
      _saveQuestion({ optionOneText: data.option1, optionTwoText: data.option2, author: user.id }).then((data) => {
        dispatch(createQues({ authorId: data.author, questionId: data.id }))
        navigate("/")
      })
    } else {
      alert("All input is required")
    }

  }

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: 'center' }}>
        <h2>Would You Rather</h2>
        <p>Create Your Own Poll</p>
        <div>
          <div>
            <p>First Option</p>
            <input placeholder='Option One' onChange={(e) => handleChangeInput(e, "option1")} />
          </div>
          <div>
            <p>Second Option</p>
            <input placeholder='Option Two' onChange={(e) => handleChangeInput(e, "option2")} />
          </div>
          <div className='button_submit' onClick={handleSubmit}>
            <button >Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
