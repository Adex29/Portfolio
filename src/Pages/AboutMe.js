import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/customStyle.css';

function AboutMe(){
    return(
        <div>
            <Header />

            <div className="px-4 py-6 sm:px-6 md:px-8 lg:p-10">
                <center>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl py-6 md:py-8 lg:py-10 font-semibold">About Me</h1>
                    <hr class="w-4/5 my-7 border-t-2 border-b-2 border-black"/>
                </center>

                <div className='flex flex-col-reverse bg-gray-200 m-0 lg:flex lg:flex-row img-container'>
                    <div className='basis-3/4 content-center'> 
                        <center>
                            {/* Responsive padding and text size for paragraphs */}
                            <p className="p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify">
                                Hi, I'm Jay-ar Baniqued, currently a 4th-year college student at Central Luzon State University. My academic journey has allowed me to develop a strong foundation in information technology, and I’m passionate about leveraging technology to create solutions that make a difference.
                            </p>
                            <p className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify">
                                My goal is to continue learning, growing, and contributing to projects that blend technology and community service. Whether it’s through my academic pursuits or personal projects, I’m always eager to take on new challenges and explore new opportunities.
                            </p>
                        </center>
                    </div>
                    <div className='basis-1/4 flex items-center justify-center p-4 lg:p-0'>
                         <img
                            className="p-2 img-border-radius m-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[300px] xl:h-[300px] object-cover" // img-border-radius from customStyle.css. Added object-cover.
                            src="/aboutMe.jpg"
                            alt="AboutMeImage"
                        />
                    </div>
                </div>

                <div className='md:flex img-container padding-0 mt-8'>
                    <div className='md:basis-1/2 certificate-container md:mr-0 lg:md:mr-2 mb-6 md:mb-0'> 
                        <center>
                            <h3 className="text-xl sm:text-2xl pt-4 sm:pt-5 font-semibold">
                                AWARDS AND CERTIFICATION
                            </h3>
                        </center>
                        <div className='p-4 sm:p-6 md:p-8 lg:p-10 text-sm sm:text-base'>
                            <p className="mb-4">
                                <i>Civil Service Eligible (Professional)</i>
                                <br />
                                <strong className="text-xs sm:text-sm">August 2023</strong> 
                           </p>
                           <p className="mb-4">
                                <i>DOST JLSS</i>
                                <br />
                                <strong className="text-xs sm:text-sm">August 2023</strong>
                           </p>
                           <p>
                                <i>Academic Scholar</i>
                                <br />
                                <strong className="text-xs sm:text-sm">2021 - 2024</strong>
                           </p>
                        </div>
                    </div>
                    <div className='md:basis-1/2 content-center certificate-container mt-5 md:mt-0 md:ml-0 lg:md:ml-2'>
                        <center>
                            <h3 className='text-xl sm:text-2xl pt-4 sm:pt-5 font-semibold'>
                                WORK EXPERIENCE
                            </h3>
                        </center>
                        <div className='p-4 sm:p-6 md:p-8 lg:p-10 text-sm sm:text-base'>
                            <p className="mb-4">
                                <i>Project League of Developers Initiative (LODI)</i>
                                <br />
                                <i className="text-xs sm:text-sm">Department of Science and Technology (DOST) Central Office,
                                Planning and Evaluation Service - Information Technology Division.</i>
                                <br />
                                <strong className="text-xs sm:text-sm">June - August 2024</strong>
                           </p>
                           <p>
                                <i>Special Program for the Employment of Students (SPES) </i>
                                <br />
                                <i className="text-xs sm:text-sm">Science City of Munoz Public Employment Service Office (PESO)</i>
                                <br />
                                <strong className="text-xs sm:text-sm">June - July 2023</strong>
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