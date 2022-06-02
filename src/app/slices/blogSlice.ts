import {createSlice} from "@reduxjs/toolkit";


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
    name: "blogSlice",
    initialState,
    reducers: {
        addBlog: (state, action) => {

        },
        addCommentToPost: (state, action) => {

        }
    }
})