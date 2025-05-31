import React, { Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectBuilder from '../components/ProjectBuilder'



class Projects extends Component{

    projects = [
        {
            name: "SMART-ICM - SMART-DX",
            description: "A web application developed using Laravel with various javascript libraries with mysql database, an OJT project developed by me and my partner within a span of 3 months. The application is designed specifically for the use of PhilRice for creating work plan and input cost of activities of rice farming, report generation, and dashboard with data analysis and AI integration for interpreting data. The application features a user-friendly interface than can be used in different devices such as desktop, tablet, and mobile phones.",
            img: "/projectIMG/SmartICMDummy.png"
        },
        {
            name: "FluiGuard",
            description: "A mobile application developed using Flutter with a Firebase backend, designed to monitor dissolved oxygen levels in water by analyzing fish behavior through live video feeds from a Raspberry Pi with a camera. It uses machine learning to process the video feeds and data from sensors, which is then displayed in the app. The app features real-time monitoring, historical data analysis, and alerts for abnormal conditions. It was a capstone project developed by me and my team mates, I was responsible for the frontend(slightly, only the data visualization page), backend development, training and integration of the objectect detection model, object tracking, object counting and analysis. Link to our Capstone Project paper:",
            img: "/projectIMG/FluiGuard.png"
        },
                {
            name: "PointDex Blogs",
            description: "A Laravel and ReactJS based blogging web-application that allows users to create, read, update, and delete blogs. It features a user-friendly interface, responsive design, and a rich text editor for creating blog posts. The platform also includes user authentication, comment sections, likes, and a search functionality. It also integrates Authentication API from different social media platforms such as Google, and Facebook.",
            img: "/projectIMG/PointDexBlogs.png"
        },
        {
            name: "DejaBrew POS System",
            description: "A POS system that allows DejaBrew staffs with different roles to browse, select, add, update and delete items, add orders and export summary of transactions. It was developed using PHP, JavaScript, HTML, and CSS, with a MySQL database for data storage. The system is designed to streamline the ordering process and improve efficiency in managing transactions.",
            img: "/projectIMG/DejaBrew.png"
        },
        {
          name: "Movie Booking System",
          description: "A movie booking  is a fully working system that allows users to browse, select seats, and book movie tickets..",
          img: "/projectIMG/Marvelusion.jpg"
        },
        {
            name: "Hotel Booking Website",
            description: "A hotel booking website that allows users to browse, select rooms, and book hotels online.",
            img: "/projectIMG/Hotel-luna.png"
        },
        {
            name: "About Me Website",
            description: "This webpage is my first html, css project. It is a static page that contains information about me and the skills I have.",
            img: "/projectIMG/project-kay-sir-Ivan.png"
        },
        {
            name: "Inventory Management System",
            description: "An inventory management system is a system made from Java that allows users to browse, select products, and manage inventory.",
            img: "/projectIMG/Inventory-Management-System.png"
        },
        {
            name: "Tic Tac Toe Game",
            description: "A tic tac toe game that allows users to play against each other.",
            img: "/projectIMG/Tictactoe.png"
        },
        {
            name: "ESP 8266 WLED LED Strips",
            description: "A ESP 8266 that has a WLED software to control individual addresible LED strips installed in my room.",
            img: "/projectIMG/Wled.jpg"
        },
        {
            name: "Router Unlocking and Android Customization",
            description: "Exploring techniques to unlock routers and modify Android devices for enhanced functionality and performance.",
            img: "/projectIMG/Openline.jpg"
        },
      ];

    render(){
        return(
            <div>
                <Header />
                <div className="md:p-10 p-3">
                    <center>
                        <h1 className="text-6xl py-10 font-semibold">Projects</h1>
                        <hr className="w-4/5 my-7 border-t-2 border-b-2 border-black" />
                    </center>
                    <ProjectBuilder projects={this.projects} />
                    {/* {this.projects.map((project, index) => (
                        <ProjectBuilder 
                            key={index}
                            name={project.name}
                            description={project.description}
                            link={project.link}
                            img={project.img}
                        />
                    ))} */}
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default Projects