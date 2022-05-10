import './style.css'

function Heading(props) {

    const url = window.location.pathname
    const isAbout = url == '/about' ? true : false

    return(
            <div className={`heading-background ${isAbout ? 'background-about' : 'background-home'}`} style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${props.background})`,
                
            }}>
                <h1>{props.title}</h1>
            </div>
    )
}

export default Heading