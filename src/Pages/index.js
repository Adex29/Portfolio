import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './homePage'
import ProjectCarousel from '../components/ProjectCarousel'
import AboutMe from './AboutMe'

function Index(){
    return(
        <div>
            <Header />
            <Home />
            {/* <ProjectCarousel /> */}
            {/* <AboutMe /> */}
            <Footer />
        </div>
    )
}

export default Index