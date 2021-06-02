import React from 'react'
import './styles/styles.css'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Api from './api'
import About from './about'
import Contact from './contact'
const Home = ()=>{
return(
    <Router>
        <div className='navBarDiv'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link className="nav-link" to='/'>Api</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/About'>About</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to='/Contact'>Contact</Link>
                        </li>
                    </ul>
            </nav>
        </div>
        <div className='contentDiv'>
            <Route path='/' exact component={Api}></Route>
            <Route path='/About' component={About}></Route>
            <Route path='/Contact' component={Contact}></Route>
        </div>
    </Router>
)
}

export default Home