import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        };
    }

    toggleShowMore = () => {
        this.setState((prevState) => ({
            showMore: !prevState.showMore
        }));
    };

    render() {
        return (
            <div className="p-10">
                <h1 className="text-6xl font-bold pl-14">Hello There and Welcome!</h1>
                <div className="flex flex-col-reverse md:flex md:flex-row md:py-0 md:pl-14">
                    <div className="basis-1/2">
                        <hr className="mx-auto w-4/5 my-7"  />
                        <h1 className="text-6xl font-bold py-10">
                            I'm<span className="text-primary"> Jay-ar Baniqued</span> and I'm a Full Stack Developer
                        </h1>
                        <p className="text-2xl py-5 text-justify">
                            I'm Jay-ar, a passionate and dedicated student, constantly exploring new ways to create, innovate, and solve problems. Whether I'm working on a web application, developing solutions, or leading creative projects, my goal is to make a positive impact through my work.
                        </p>
                    </div>
                    <div className="basis-1/2">
                        <center>
                            <img
                                className="rounded-full my-5"
                                src="/profile.jpg"
                                alt="profile"
                                width="550"
                                height="550"
                            />
                        </center>
                    </div>
                </div>
                <div className="flex start justify-start w-1/2 py-0 md:pl-14">
                    <a href="/contactme">
                        <button className="btn btn-wide btn-success text-lg">Contact Me?</button>
                    </a>
                </div>
                <div className="flex start justify-start pt-14 pb-5 md:pl-14">
                    <h1 className="text-6xl">Know more about me</h1>
                </div>
                <div>
                    <div className="md:flex md:start md:justify-start md:pl-14">
                        <div>
                            <button className="btn mt-2" onClick={this.toggleShowMore}>
                                {this.state.showMore ? 'Show Less' : 'Show More'}
                            </button>
    
                            <p className={`paragraph pt-5 ${this.state.showMore ? 'show' : ''}`}>
                                I work on a variety of projects that showcase my skills. These include the DejaBrew POS System, which manages transactions for staff, a Movie Booking System for browsing and booking tickets, and a Hotel Booking Website for online room reservations. I also built an Inventory Management System in Java, a fun Tic Tac Toe Game, and an ESP 8266 WLED LED Strips controller for smart lighting. My early projects include an About Me Website, and I've explored Router Unlocking and Android Customization to enhance device performance and customization.
                            </p>
                        </div>
    
                        <div className="mt-5 md:mt-0 md:w-1/2 md:flex md:justify-center">
                            <a href="/projects">
                                <button className="btn btn-lg items-center justify-center space-x-2">
                                    <FontAwesomeIcon icon={faArrowRightLong} size="3x" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default HomePage;
