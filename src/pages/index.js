import React from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby";

import Layout from '../components/layout'


class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Shreyas Prakash"
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
                            <h1>Hi, Shreyas here! <span role="img" aria-label="waving hand">👋</span> </h1>
                        </header>

                        <p>
                        I'm <a href="https://www.linkedin.com/in/shreyasprakash/">Shreyas Prakash</a> and I'm an electronics engineer turned design researcher turned social entrepreneur. 
                        </p>

                        <p>
                        I have been interested in everything <em>designerly</em> so far, exploring crossroads of how design thinking could make an impact in education and social upliftment through my non profit organisation, <a href="https://dhivelabs.org/">d.Hive Labs</a>. I also host a <a href="ss">Shake Up The World</a> podcast where I interview founders of social initiatives literally 'shaking up the world' through their impact.
                        </p>

                        <p>
                        Be the first to be notified with my personal write-ups, ruminations on interesting non-fictions, podcasts, interesting-stuff-from-the-internet kinds with <em>skin-in-game</em> (which I personally chew, digest and then recommend) by subscribing to my <a href="http://eepurl.com/gWCvm5">mailing list</a>! I send these once a month, and I wont spam you. Ever.
                        </p>

                        <div className="12u 12u$(small)">
                               
                               <ul className="actions">
                                   
                                   <li><a href="http://eepurl.com/gWCvm5" className="button">Subscribe 🌟</a></li>
                                   <li><Link to={`blog`} className="button">All Articles <span role="img" aria-label="coffee">☕</span></Link></li>
                            <li><Link to={`subscribe`} className="button">Design Works<span role="img" aria-label="lightning">⚡</span> </Link></li>
                               </ul>
                           </div>
                        
                        
                    </section>

                    

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>“The problem of knowledge is that there are many more books on birds written by ornithologists than books on birds written by birds and books on ornithologists written by birds” - Nassim Taleb </p>
                        
                        <div className="row">
                            <div className="8u 12u$(small)">
                            <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                            <input type="hidden" name="bot-field" />
                                
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                    <br/>
                                    <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                                </form>
                                
                            </div>
                            <div className="4u 12u$(small)">
                            
                                <ul className="labeled-icons">
                                    
                                    <li>
                                        <h3 className="icon fa-whatsapp"><span className="label">Phone</span></h3>
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