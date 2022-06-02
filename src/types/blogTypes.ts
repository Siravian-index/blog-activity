export type commentType = {
    comment: string
    author: string
}

export type blogType = {
    id: string | number
    title: string
    content: string
    comments: commentType[]
}

export type stateType = {
    logged: boolean
    blogs: blogType[]
}