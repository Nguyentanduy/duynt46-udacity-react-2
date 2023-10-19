import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Card from '../components/Card/Card'
import './Home.css'
import { setAllQuestions } from '../Slices/QuestionsSlices'
import { useDispatch, useSelector } from 'react-redux'
import { _getQuestions } from '../_DATA'
export default function Home() {
    const dispatch = useDispatch()
    const [newQues, setNewQues] = useState()
    const [doneQues, setDoneQues] = useState()
    const [isQues, setIsQues] = useState(true)
    const allQuestions = useSelector(state => state.questions.allQuestions)
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        _getQuestions().then(data => {
            dispatch(setAllQuestions(data))
        })
    }, [])

    useEffect(() => {
        if (allQuestions && user.answers) {
            let questionList = Object.values(allQuestions);
            let answersUser = Object.keys(user?.answers);
            setNewQues(questionList.filter(
                (item) => !answersUser.includes(item.id)
            ))
            setDoneQues(questionList.filter(
                (item) => answersUser.includes(item.id)
            ))
        }
    }, [allQuestions])

    const handleSwithPoll = (isPoll) => {
        setIsQues(isPoll)
    }

    return (
        <div>
            <NavBar />
            <div className='home'>
                <div style={{ display: 'flex' }}>
                    <div className='button' onClick={() => handleSwithPoll(true)}>New Questions</div>
                    <div className='button' onClick={() => handleSwithPoll(false)}>Done</div>
                </div>
                {isQues ? <div>
                    <div style={{ fontSize: "20px", fontWeight: '600' }}>New Questions</div>
                    <div className='border-box'>
                        {newQues?.map((item) => {
                            return <Card key={item.id} item={item} />
                        })}
                    </div>
                </div> : <div>
                    <div style={{ fontSize: "20px", fontWeight: '600' }}>Done</div>
                    <div className='border-box'>
                        {doneQues?.map((item) => {
                            return <Card key={item.id} item={item} />
                        })}
                    </div>
                </div>}


            </div>
        </div>
    )
}
