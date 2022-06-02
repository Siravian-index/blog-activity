import React from 'react'
import Blog from "../../components/Blog";

const Blogs = () => {
    // const {state: {blogs}} = bringStateProvider()

    return (
        <div>
            <h1 className='text-center text-xl my-5'>Recent Blogs</h1>
            <div className='flex flex-col md:flex-row md:justify-around items-center'>
            {/*{blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}*/}
            </div>
        </div>
    )
}

export default Blogs
