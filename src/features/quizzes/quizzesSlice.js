import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes: {}},
    reducers: {
        addQuiz: (state, action) => {      
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
})

export const addQuizIdForTopicId = (quiz) => {
    const { topicId, quizId } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdForTopic(quiz));
    }
}


export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;