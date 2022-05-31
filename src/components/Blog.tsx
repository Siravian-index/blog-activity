import React from 'react'
import {blogType} from "../state/reducer";

interface IBlog {
    blog: blogType
}

const Blog: React.FC<IBlog> = ({blog}) => {

    return (
        <div className='main_content'>
            <h4>{blog.title}</h4>
            <div>
                <p>{blog.content.slice(0, 50)}...</p>
            </div>
        </div>
    )
}

export default Blog
