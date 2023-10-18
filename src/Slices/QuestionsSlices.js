import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
    allQuestions: {}
    
};
const questionsSlices = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAllQuestions: (state, action) => {
            state.allQuestions = action.payload
        }
    },
})

export const { setAllQuestions} = questionsSlices.actions
export default questionsSlices.reducer