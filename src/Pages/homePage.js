import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "../reacbits/ScrollReveal/ScrollReveal";
import RotatingText from "../reacbits/RotatingText/RotatingText";
import FadeContent from "../reacbits/FadeContent/FadeContent";
import BlurText from "../reacbits/BlurText/BlurText";
// Import AnimatedContent
import AnimatedContent from "../reacbits/AnimatedContent/AnimatedContent";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      currentColorIndex: 0,
    };
  }

  toggleShowMore = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

handleNameRotation = (nextIndex) => {
    const colors = ['text-blue-500', 'text-red-500', 'text-green-500', 'text-purple-500', 'text-pink-500'];
    
    setTimeout(() => {
        this.setState({
            currentColorIndex: nextIndex % colors.length
        });
    }, 800); 
};


  render() {
    const colors = ['text-blue-500', 'text-red-500', 'text-green-500', 'text-purple-500', 'text-pink-500'];
    
    return (
      <div>
        <FadeContent
          blur={false}
          distance={30}
          direction="vertical"
          reverse={false}
          duration={400}
          ease="power1.out"
          initialOpacity={0.8}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="p-10">
            <AnimatedContent direction="vertical" distance={50} delay={0.4} duration={0.8}>
              <BlurText
                text="Hello There and Welcome!"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-6xl font-bold"
              />
            </AnimatedContent>

            <div className="flex flex-col-reverse md:flex md:flex-row md:py-0 md:pl-14">
              <div className="basis-1/2">
                <AnimatedContent direction="horizontal" distance={100} delay={0.5} duration={0.8} reverse={true}>
                  <hr className="mx-auto w-4/5 my-7" />
                  <h1 className="text-6xl font-bold py-10">
                    I'm
                    <span className={colors[this.state.currentColorIndex]}>
                      {" "}
                      <RotatingText
                        texts={["Jay-ar Baniqued", "Jay-ar Baniqued", "Jay-ar Baniqued", "Jay-ar Baniqued", "Jay-ar Baniqued"]}
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={5000}
                        onNext={this.handleNameRotation}
                      />
                    </span>{" "}
                    and I'm a Full Stack Developer
                  </h1>
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                  >
                    <p className="text-2xl py-5 text-justify">
                      I'm Jay-ar, a passionate and dedicated student, constantly
                      exploring new ways to create, innovate, and solve problems.
                      Whether I'm working on a web application, developing
                      solutions, or leading creative projects, my goal is to make
                      a positive impact through my work.
                    </p>
                  </ScrollReveal>
                </AnimatedContent>
              </div>
              <div className="basis-1/2">
                <AnimatedContent direction="horizontal" distance={100} delay={0.5} duration={0.8}>
                  <center>
                    <img
                      className="rounded-full my-5"
                      src="/profile.jpg"
                      alt="profile"
                      width="550"
                      height="550"
                    />
                  </center>
                </AnimatedContent>
              </div>
            </div>
            
            <AnimatedContent direction="vertical" distance={50} delay={0.2} duration={0.8}>
              <div className="flex start justify-start pt-14 pb-5 md:pl-14">
                <h1 className="text-6xl">Know more about me</h1>
              </div>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={50} delay={0.3} duration={0.8}>
              <div>
                <div className="md:flex md:start md:justify-start md:pl-14">
                  <div>
                    <button className="btn mt-2" onClick={this.toggleShowMore}>
                      {this.state.showMore ? "Show Less" : "Show More"}
                    </button>

                    <p
                      className={`paragraph pt-5 ${
                        this.state.showMore ? "show" : ""
                      }`}
                    >
                      I work on a variety of projects that showcase my skills.
                      These include the DejaBrew POS System, which manages
                      transactions for staff, a Movie Booking System for browsing
                      and booking tickets, and a Hotel Booking Website for online
                      room reservations. I also built an Inventory Management
                      System in Java, a fun Tic Tac Toe Game, and an ESP 8266 WLED
                      LED Strips controller for smart lighting. My early projects
                      include an About Me Website, and I've explored Router
                      Unlocking and Android Customization to enhance device
                      performance and customization.
                    </p>
                  </div>

                  <div className="mt-5 md:mt-0 md:w-1/2 md:flex md:justify-center">
                    <a href="/projects">
                      <button className="btn btn-lg items-center justify-center space-x-2 hover:translate-x-2">
                        <FontAwesomeIcon icon={faArrowRightLong} size="3x" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </FadeContent>
      </div>
    );
  }
}

export default HomePage;