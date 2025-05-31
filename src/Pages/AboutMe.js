import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/customStyle.css";

function AboutMe() {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      title: "Email",
      value: "jayarbaniqued29@gmail.com",
      link: "mailto:jayarbaniqued29@gmail.com",
      description: "Drop me a line anytime",
      colorClassName: "text-blue-600",
      hoverColorClassName: "hover:text-blue-700",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      title: "LinkedIn",
      value: "Jay-ar Baniqued",
      link: "https://www.linkedin.com/in/jay-ar-b-6a7343128/",
      description: "Let's connect professionally",
      colorClassName: "text-sky-600",
      hoverColorClassName: "hover:text-sky-700",
    },
  ];

  return (
    <div>
      <Header />

      <div className="px-4 py-6 sm:px-6 md:px-8 lg:p-10">
        <center>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl py-6 md:py-8 lg:py-10 font-semibold">
            About Me
          </h1>
          <hr className="w-4/5 my-7 border-t-2 border-b-2 border-black" />
        </center>

        <div className="flex flex-col-reverse bg-gray-200 m-0 lg:flex lg:flex-row img-container">
          <div className="basis-3/4 content-center">
            <center>
              <p className="p-4 sm:p-6 md:p-8 lg:p-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify">
                Hi, I'm Jay-ar Baniqued, currently a 4th-year college student at
                Central Luzon State University. My academic journey has allowed
                me to develop a strong foundation in information technology, and
                I’m passionate about leveraging technology to create solutions
                that make a difference.
              </p>
              <p className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10 lg:pb-10 text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify">
                My goal is to continue learning, growing, and contributing to
                projects that blend technology and community service. Whether
                it’s through my academic pursuits or personal projects, I’m
                always eager to take on new challenges and explore new
                opportunities.
              </p>
            </center>
          </div>
          <div className="basis-1/4 flex items-center justify-center p-4 lg:p-0">
            <img
              className="p-2 img-border-radius m-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[300px] xl:h-[300px] object-cover"
              src="/aboutMe.jpg"
              alt="AboutMeImage"
            />
          </div>
        </div>

        <div className="md:flex mt-4 lg:gap-x-1 gap-x-4">
          <div className="md:basis-1/2 certificate-container md:mr-0 lg:md:mr-2 mb-6 md:mb-0">
            <center>
              <h3 className="text-xl sm:text-2xl pt-4 sm:pt-5 font-semibold">
                AWARDS AND CERTIFICATION
              </h3>
            </center>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-sm sm:text-base">
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
          <div className="md:basis-1/2 content-center certificate-container mt-4 md:mt-0 md:ml-0 lg:md:ml-2">
            <center>
              <h3 className="text-xl sm:text-2xl pt-4 sm:pt-5 font-semibold">
                WORK EXPERIENCE
              </h3>
            </center>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-sm sm:text-base">
                <p className="mb-4">
                <i>Internship</i>
                <br />
                <i className="text-xs sm:text-sm">
                 Philippine Rice Research Institute - Central Experiment Station (PhilRice - CES),
                  Training Management and Services Division.
                </i>
                <br />
                <strong className="text-xs sm:text-sm">
                  February - May 2025
                </strong>
              </p>
              <p className="mb-4">
                <i>Project League of Developers Initiative (LODI)</i>
                <br />
                <i className="text-xs sm:text-sm">
                  Department of Science and Technology (DOST) Central Office,
                  Planning and Evaluation Service - Information Technology
                  Division.
                </i>
                <br />
                <strong className="text-xs sm:text-sm">
                  June - August 2024
                </strong>
              </p>
              <p>
                <i>Special Program for the Employment of Students (SPES) </i>
                <br />
                <i className="text-xs sm:text-sm">
                  Science City of Munoz Public Employment Service Office (PESO)
                </i>
                <br />
                <strong className="text-xs sm:text-sm">June - July 2023</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="lg:flex lg:gap-16 items-center">
            <div className="lg:w-full mb-12 lg:mb-0">
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="w-full group bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`text-gray-700 group-hover:scale-110 group-hover:${method.colorClassName} transition-all duration-300`}
                      >
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {method.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {method.description}
                        </p>
                        <a
                          href={method.link}
                          className={`inline-flex items-center text-lg font-semibold ${method.colorClassName} ${method.hoverColorClassName} transition-colors duration-300 group`}
                        >
                          {method.value}
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;