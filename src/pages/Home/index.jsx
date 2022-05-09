/* eslint-disable jsx-a11y/alt-text */
import './style.css'
import data from '../../data.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


function Home() {

    const apartments = data.map((apartment) => 
        <div className='listed-apartment-container' key={apartment.id}>
            <img className='listed-apartment-picture' src={apartment.cover} />
            <div className='listed-apartment-title'>{apartment.title}</div>
        </div>
    )

    return(
        <div>
            <Header />
            <div className='heading-background'>
                <h1>Home anywhere and everywhere</h1>
            </div>
            <main>
                {apartments}
            </main>
            <Footer />
        </div>
    )
}

export default Home