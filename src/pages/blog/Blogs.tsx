import React from 'react'
import BlogList from "../../components/blog/BlogList";

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-xl my-5'>Recent Blogs</h1>
            <div className='flex flex-col md:flex-row md:justify-around items-center'>
                <BlogList/>
            </div>
        </div>
    )
}

export default Blogs
