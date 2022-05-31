import './App.css'
import {bringStateProvider} from './state/StoreProvider'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutMe from './pages/about_me/AboutMe'
import Blog from './components/Blog'
import BlogForm from './pages/blog_form/BlogForm'
import Navbar from './components/Navbar'
import Knowledge from './pages/knowledge/Knowledge'
import Portfolio from './pages/portfolio/Portfolio'
import Footer from './components/Footer'
import Blogs from "./pages/blog/Blogs";

function App() {
    const {state} = bringStateProvider()
    console.log(state)

    return (
        <BrowserRouter>
            <Navbar logged={state.logged}/>
            <Routes>
                {state.logged && <Route path='/blog/form' element={<BlogForm/>}/>}
                <Route path='/' element={<AboutMe/>}/>
                <Route path='/blog' element={<Blogs/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/knowledge' element={<Knowledge/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
