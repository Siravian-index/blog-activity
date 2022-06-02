import * as React from "react"
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import Blog from "./Blog";

interface IProps {}

const BlogList : React.FC<IProps> = () => {
    const blogs = useSelector((state: RootState) => state.blogs)
    return <>
        {blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}
    </>
}

export default BlogList


