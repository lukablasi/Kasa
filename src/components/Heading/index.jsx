import './style.css'

function Heading(props) {

    return(
            <div className='heading-background' style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${props.background})`
            }}>
                <h1>Home anywhere and everywhere</h1>
            </div>
    )
}

export default Heading