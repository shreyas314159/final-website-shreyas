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
                            <h1>Hey there! 👋 </h1>
                        </header>

                        <p>
                        I'm Shreyas Prakash and I'm an electronics engineer turned design researcher turned social entrepreneur. 
                        </p>

                        <p>
                        I have been interested in everything <em>designerly</em> so far, exploring crossroads of how design thinking could make an impact in education and social upliftment through my non profit organisation, <a href="https://dhivelabs.org/">d.Hive Labs</a>. I also host a <a href="ss">Shake Up The World</a> podcast where I interview founders of social initiatives literally shaking up the world through their impact.
                        </p>

                        <p>
                        Be the first to be notified with my personal write-ups, ruminations on interesting non-fictions, podcasts, 'interesting-stuff-from-the-internet' kinds with <em>skin-in-game</em> (which I personally chew, digest and recommend) by subscribing to my mailing list. I send these once a month, and I wont spam you. Ever.
                        </p>

                        <div className="8u 12u$(small)">
                               
                               <ul className="actions">
                                   
                                   <li><a href="http://eepurl.com/gWCvm5" className="button">Subscribe</a></li>
                               </ul>
                           </div>
                        
                        
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