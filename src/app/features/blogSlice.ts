import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type commentType = {
    id: string
    comment: string
    author: string
}

export type blogType = {
    id: string
    title: string
    content: string
    comments: commentType[]
}



const initialState: blogType[] = []

export const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<blogType>) => {
            state.push(action.payload)
        },
        addCommentToPost: (state, action: PayloadAction<commentType>) => {

        }
    }
})


const blogReducer = blogSlice.reducer
export default blogReducer