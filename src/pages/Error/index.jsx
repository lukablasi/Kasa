import './style.css'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'

function Error() {
    return(
        <div>
            <Header />
            <div className='error-page'>
                <div className='error-number'>404</div>
                <div>Oops! It looks like this page doesn't exist.</div>
                
            </div>
            <div className='back-home' >
            <Link className='back-home-link' to='/'>Go back to home page</Link>
            </div>
        </div>
    )
}

export default Error