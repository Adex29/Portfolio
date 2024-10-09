import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/customStyle.css';

function AboutMe(){
    return(
        <div>
        <Header />

        <div className="p-10">
            <center>
                <h1 className="text-6xl py-10 font-semibold">About Me</h1>
                <hr className="w-4/5 my-7 border-t-2 border-b-2 border-black" />
            </center>
            <div className='flex flex-col-reverse bg-gray-200 lg:flex lg:flex-row img-container'>
                <div className='basis-3/4 content-center'>
                    <center>
                        <p className="p-10 text-3xl text-justify">Hi, I'm Jay-ar Baniqued, currently a 4th-year college student at Central Luzon State University. My academic journey has allowed me to develop a strong foundation in information technology, and I’m passionate about leveraging technology to create solutions that make a difference.     
                        </p>
                        <p className="px-10 pb-10 text-3xl text-justify">
                        My goal is to continue learning, growing, and contributing to projects that blend technology and community service. Whether it’s through my academic pursuits or personal projects, I’m always eager to take on new challenges and explore new opportunities.
                        </p>
                    </center>
                </div>
                <div className='basis-1/4'>
                     <img className="p-2 img-border-radius m-auto" src="/aboutMe.jpg" width="350" height="350" alt="AboutMeImage"></img>
                </div>
            </div>
            <div className='md:flex img-container padding-0'>
                <div className='md:basis-1/2 certificate-container md:mr-2'>
                    <center>
                        <h3 className="text-2xl pt-5">
                            <strong>AWARDS AND CERTIFICATION</strong>
                        </h3>
                    </center>
                    <div className='p-10'>
                        <p>
                            <i>Civil Service Eligible (Professional)</i>
                            <br />
                            <strong>August 2023</strong>
                            <br />
                            <br />
                       </p>
                       <p>
                            <i>DOST JLSS</i>
                            <br />
                            <strong>August 2023</strong>
                            <br />
                            <br />
                       </p>
                       <p>
                            <i>Academic Scholar</i>
                            <br />
                            <strong>2021 - 2024</strong>
                            <br />
                            <br />
                       </p>
                    </div>
                </div>
                <div className='md:basis-1/2 content-center certificate-container mt-5 md:mt-0 md:ml-2'>
                    <center>
                        <h3 className='text-2xl pt-5'>
                            <strong>WORK EXPERIENCE</strong>
                        </h3>
                    </center>
                    <div className='p-10'>
                        <p>
                            <i>Project League of Developers Initiative (LODI)</i>
                            <br />
                            <i>Department of Science and Technology (DOST) Central Office,
                            Planning and Evaluation Service - Information Technology Division.</i>
                            <br />
                            <strong>June - August 2024</strong>
                            <br />
                            <br />
                       </p>
                       <p>
                            <i>Special Program for the Employment of Students (SPES) </i>
                            <br />
                            <i>Science City of Munoz Public Employment Service Office (PESO)</i>
                            <br />
                            <strong>June - July 2023</strong>
                            <br />
                            <br />
                       </p>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
    </div>
    )
}

export default AboutMe