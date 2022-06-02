import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutMe from './pages/about_me/AboutMe'
import BlogForm from './pages/blog_form/BlogForm'
import Navbar from './components/Navbar'
import Knowledge from './pages/knowledge/Knowledge'
import Portfolio from './pages/portfolio/Portfolio'
import Blogs from './pages/blog/Blogs'
import {useSelector} from "react-redux";
import {RootState} from "./app/store";

function App() {
    const logged = useSelector((state: RootState) => state.logging.isLogged)
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {logged && <Route path='/blog/form' element={<BlogForm/>}/>}
                <Route path='/' element={<AboutMe/>}/>
                <Route path='/blog' element={<Blogs/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/knowledge' element={<Knowledge/>}/>
            </Routes>
            {/*<Footer/>*/}
        </BrowserRouter>
    )
}

export default App
