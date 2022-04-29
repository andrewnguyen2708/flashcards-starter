import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
            return {
                topics: {
                    ...state.topics,
                    [action.payload.id]: {
                        ...action.payload,
                        quizIds: [],
                    }
                }
            };
        },
        addQuizIdForTopic: (state, action) => {
            const { topicId, quizId } = action.payload
            state.topics[topicId].quizIds.push(quizId);
        }
    }
})

export const selectTopics = state => state.topics.topics;


export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;

export default topicsSlice.reducer;

