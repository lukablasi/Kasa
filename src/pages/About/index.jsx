import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import UnfoldTab from '../../components/UnfoldTab'
import backgroundImage from './background.png'

function About() {
    return(
        <div>
            <Header />
            <Heading background={backgroundImage}/>
            <main>
                <UnfoldTab />
                <UnfoldTab />
                <UnfoldTab />
                <UnfoldTab />
            </main>
            <Footer />
        </div>
    )
}

export default About