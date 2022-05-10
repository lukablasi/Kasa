/* eslint-disable jsx-a11y/alt-text */
import './style.css'
import data from '../../data.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import backgroundImage from './background.png'
import { Link } from 'react-router-dom'



function Home() {

    const apartments = data.map((apartment) => 
        <Link to={`/apartment/${apartment.id}`} className='listed-apartment-container' key={apartment.id}>
            
            <img className='listed-apartment-picture' src={apartment.cover} />
            
            <div className='listed-apartment-title'>{apartment.title}</div>
            
        </Link>
    )

    const title='Home anywhere and everywhere'

    return(
        <div>
            <Header />
            <Heading title={title} background={backgroundImage}/>
            <main>
                {apartments}
            </main>
            <Footer />
        </div>
    )
}

export default Home