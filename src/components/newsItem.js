import React from "react"
import { Link } from "gatsby";

import { parseImageUrl } from 'notabase/src/utils'

export default ({ data }) => {
    const { title, tags, cover_image, publish_date, desc, read_time, url, slug } = data

    let coverimageURL = parseImageUrl(cover_image[0], 1000)
    return (
        <div style={{ margin: 60 }}>        
            <Link to={`subscribe/posts/${url}/`}>
           
            
            <h2>{title}</h2>
                <img 

                alt={`${title} cover image`}

                style={{ width: '100%' }}

                src={coverimageURL}
                

              />
              <p style = {{ color: "black" }} dangerouslySetInnerHTML={{ __html: desc }}></p>
              
              <br/>
            
              
              
             
            </Link>
        </div>
    )
}