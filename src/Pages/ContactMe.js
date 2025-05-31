import Header from "../components/Header";
import Footer from "../components/Footer";
// showModal and closeModal are not used in this component, so they can be removed
// import { showModal, closeModal } from "../components/EventHandler";
import "../css/customStyle.css";

function ContactMe() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "jayarbaniqued29@gmail.com",
      link: "mailto:jayarbaniqued29@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Jay-ar Baniqued",
      link: "https://www.linkedin.com/in/jay-ar-b-6a7343128/",
      description: "Let's connect professionally",
    },
  ];

  return (
    // 1. Add flex flex-col to make this a column-based flex container
    //    Using min-h-screen is often preferred over h-screen for page layouts
    //    as it allows content to grow beyond the screen height if necessary.
    //    If you strictly want it to be exactly screen height and potentially
    //    have internal scrolling, h-screen is fine.
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      {/* 2. Add flex-grow to this main content wrapper so it expands */}
      {/*    It's good practice to use a <main> tag for the main content */}
      <main className="md:p-10 p-3 flex-grow">
        <center>
          <h1 className="text-6xl py-10 font-semibold">Contact Me</h1>
          <hr className="w-4/5 my-7 border-t-2 border-b-2 border-black" />
        </center>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="lg:flex lg:gap-16 items-center">
            <div className="lg:w-full mb-12 lg:mb-0">
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
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
                          className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300 group"
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
      </main>
      <Footer />
    </div>
  );
}

export default ContactMe;