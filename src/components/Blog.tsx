import React from 'react'
import {blogType} from "../state/reducer";

interface IBlog {
    blog: blogType
}

const Blog: React.FC<IBlog> = ({blog}) => {

    const contentFormatted = `${blog.content.slice(0, 30)}...`
    return (
        <div className=''>
            <h4>{blog.title}</h4>
            <div>
                <p>{contentFormatted}</p>
            </div>
        </div>
    )
}

export default Blog
