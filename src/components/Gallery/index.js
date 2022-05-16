import './style.css'
import { useState } from "react";

function Gallery(props) {

    const [pic, updatePic] = useState(props.photos[0])

    

    return(
        <div className='gallery-container'>
            <img className='gallery' src={pic} />
            
            
            <svg onClick={()=> {
                let index = props.photos.indexOf(pic)
                
                if (index > 0) {
                    updatePic(props.photos[index - 1])
                } else {
                    updatePic(props.photos[props.photos.length - 1])
                }
            }} className={`left-arrow ${(props.photos.length == 1) ? 'no-display' : ''}`} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
</svg>

<svg onClick={()=> {
    let index = props.photos.indexOf(pic)
    if (index + 1 < props.photos.length){
        updatePic(props.photos[index + 1])
    } else {
        updatePic(props.photos[0])
    }
    
    
}} className={`right-arrow ${(props.photos.length == 1) ? 'no-display' : ''}`} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z" fill="white"/>
</svg>


        </div>
    )
}

export default Gallery