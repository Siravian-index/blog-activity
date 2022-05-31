import React from 'react'
import '../../App.css'
import {bringStateProvider} from "../../state/StoreProvider";
import Blog from "../../components/Blog";

const Blogs = () => {
    const {state: {blogs}} = bringStateProvider()

    return (
        <div className='main_content'>
            <h1>Recent Blogs</h1>
            {blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}
        </div>
    )
}

export default Blogs
