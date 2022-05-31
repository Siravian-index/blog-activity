import React from 'react'
import {bringStateProvider} from "../../state/StoreProvider";

const BlogForm = () => {
    const {state} = bringStateProvider()

    return (
        <div className='main_content'>
            <h1>Blog form</h1>
        </div>
    )
}

export default BlogForm
