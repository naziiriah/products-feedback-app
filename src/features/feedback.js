import {  createSlice } from "@reduxjs/toolkit";
import { DB } from "../data/db";


const initialState = {
    value : DB
}

const feedbackList = createSlice({
    name : "Feedbacks", 
    initialState, 
    reducers : {
        addProductRequest: (state, action ) => {
            state.value.productRequests.push(action.payload)
            
        },
        editProductRequest : (state, action) => {
            const { id, title, category, description, status} = action.payload
            const existingFeedback = state.value.productRequests.find(state => state.id === id)   
            if (existingFeedback) {
                existingFeedback.title = title
                existingFeedback.category = category
                existingFeedback.status = status
                existingFeedback.description = description
            }
                                        
        },
        deleteProductRequest : (state, action) => {
                const { id } = action.payload
                const existingState = state.value.productRequests.filter(state => state.id !== id )
                state.value.productRequests = existingState
        },
        addComments : (state, action) => {
            const {feedID, value} = action.payload
            const existingState = state.value.productRequests.find(state => state.id === feedID)
            existingState.comments.push(value)
        },
        editVote : (state, action) => {
            const { id, vote} =  action.payload
            const existingFeedback = state.value.productRequests.find(state => state.id === id)
            const votes =    existingFeedback.upvotes
            vote ? existingFeedback.upvotes =votes - 1 : existingFeedback.upvotes = votes + 1                        
        },
        addComment : (state, action) => {
            const { id, content } = action.payload
            const existingState = state.value.productRequests.find(state => state.id === id)
            const user = state.value.currentUser
            existingState.comments ? existingState.comments.push({
                "id": 100,
                content,
                user
            }): existingState.comments = [{
                "id": 100,
                content,
                user
            }]
        }, 
        addReply : (state, action) => {
            const {ID, commentID,replyingTo, content} = action.payload
            const user = state.value.currentUser
            const existingState = state.value.productRequests.find(state => state.id === ID)
            const reply = existingState.comments.find( state => state.id === commentID)
            reply.replies ? reply.replies.push({
                content,
                replyingTo,
                 user}) 
            : reply.replies = [{
                content,
                replyingTo,
                user
            }] 
        }
    }
})

export const { addProductRequest, editProductRequest, deleteProductRequest, editVote, addComment, addReply } = feedbackList.actions;

export default feedbackList.reducer;