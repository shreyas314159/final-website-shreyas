import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    
                    <h1>My latest blog on <strong><a href="/blog/posts/practise-manifesto/"><font color = "#00FF00"><mark>Design Practise Manifesto</mark></font></a></strong>  </h1>
                </div>
               
                        
                            
                <Footer />
            </header>
        )
    }
}

export default Header
