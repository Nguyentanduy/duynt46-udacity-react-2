import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUser: {},
    user: {},
    url: ""
};
const userSlices = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAllUsers: (state, action) => {
            state.allUser = action.payload
        },
        setUserLogin: (state, action) => {
            state.user = action.payload
        },
        updateAnswer: (state, action) => {
            const { id, selectedOption, userId } = action.payload
            let userUpdate = { ...state.user.answers, [id]: selectedOption }
            state.user = { ...state.user, answers: userUpdate }
            let user = state.allUser[userId]
            let newArr = { ...user.answers, [id]: selectedOption }
            state.allUser = { ...state.allUser, [userId]: { ...user, answers: newArr } }
        },
        createQues: (state, action) => {
            const { authorId, questionId } = action.payload
            state.allUser[authorId].questions.push(questionId)
        },
        saveUrl: (state, action) => {
            state.url = action.payload
        }
    },
})

export const { setAllUsers, setUserLogin, updateAnswer, createQues, saveUrl } = userSlices.actions
export default userSlices.reducer