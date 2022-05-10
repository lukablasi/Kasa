import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import UnfoldTab from '../../components/UnfoldTab'
import backgroundImage from './background.png'

function About() {

    const tabs = [
        {
            id: 1,
            title: 'Reliability',
            text: 'The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.'
        },
        {
            id: 2,
            title: 'Respect',
            text: 'Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.'
        },
        {
            id: 3,
            title: 'Service',
            text: 'Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions.'
        },
        {
            id: 4,
            title: 'Safty',
            text: "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests."
        }
    ].map((tab) => <UnfoldTab key={tab.id} title={tab.title} text={tab.text} /> )

    return(
        <div className='about'>
            <Header />
            <Heading extraClass='about-background' background={backgroundImage}/>
            <main className='tabs-container'>
                {tabs}
            </main>
            <Footer />
        </div>
    )
}

export default About