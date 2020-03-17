import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hey there! </h2>
                        </header>
                        <p>Personal website of Shreyas Prakash<br />Integrated with <a href="https://conradlin.com/blog/posts/host-gatsbyjs-blog-with-notion-cms-and-netlify-for-free/" target="_blank">notion</a> as a CMS for demonstration purposes by <a href="https://conradlin.com" target="_blank">Conrad Lin</a></p>
                        <ul className="actions">
                            <li><a href="https://www.youtube.com/watch?v=dMYKXVf88J0" target="_blank" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Sharing</h2>

                        <ul className="actions">
                            <li><Link to={`blog`} className="button">All Articles</Link></li>
                            <li><Link to={`subscribe`} className="button">All Newsletters</Link></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                               
                                <ul className="actions">
                                    
                                    <li><a href="http://eepurl.com/gWCvm5" className="button">Subscribe</a></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        619-379-810 
                                    </li>
                                    <li><h3 className="icon fa-location-arrow"><span className="label">Location</span></h3>
                                        Delft, Netherlands</li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">shreyas314159@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex