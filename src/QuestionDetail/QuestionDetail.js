import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import './style.css'
import Img from '../img/user2.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateAnswer } from '../Slices/UserSlices'
import { updateQuestions } from '../Slices/QuestionsSlices'
import { _saveQuestionAnswer } from '../_DATA'

export default function QuestionDetail() {
    const { id } = useParams()
    const [data, setData] = useState()
    const [optionVote, setOptionVote] = useState()
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allQuestions = useSelector(state => state.questions.allQuestions)
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (allQuestions) {
            setData(allQuestions[id])
            if (!allQuestions[id]){
                navigate('/error')
            }
        }
    }, [allQuestions])

    useEffect(() => {
        if (data) {
            if (data.optionOne.votes.find(item => item === user.id)) {
                setOptionVote("optionOne")
                setIsDisabled(true)
            }
            if (data.optionTwo.votes.find(item => item === user.id)) {
                setOptionVote("optionTwo")
                setIsDisabled(true)
            }
        }
    }, [data])

    const handleClick = (id, option, userId) => {
        dispatch(updateAnswer({ id, option,userId }))
        _saveQuestionAnswer({ authedUser: userId, qid: id, answer: option }).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
            <NavBar />
            <div className='qs-detail'>
                <h2>Poll by {data?.author}</h2>
                <img src={Img} alt='img' width={500} height={300} />
                <h2>Would You Rather</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <div className='option' style={optionVote === "optionOne" ? { marginRight: '10px', backgroundColor: "gray" } : { marginRight: '10px' }}>
                    <p>{data?.optionOne?.text}</p>
                    <button disabled={isDisabled} style={{ width: '100%', background: '#63b2ac', outline: 'none', border: 'none', color: 'white' }} onClick={() => handleClick(data.id, "optionOne", user.id)}>Click</button>
                </div>
                <div className='option' style={optionVote === "optionTwo" ? { marginRight: '10px', backgroundColor: "gray" } : { marginRight: '10px' }}>
                    <p>{data?.optionTwo?.text}</p>
                    <button disabled={isDisabled} style={{ width: '100%', background: '#63b2ac', outline: 'none', border: 'none', color: 'white' }} onClick={() => handleClick(data.id, "optionTwo", user.id)}>Click</button>
                </div>
            </div>
        </div>
    )
}
