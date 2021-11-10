//import logo from './logo.svg';
import { useState, useEffect } from 'react';

import './App.css';
import IMAGES from './img.js';
import Card from './components/card';
import Skill from './components/skill';
import Eande from './components/eande';
import Project from './components/project';
import Resume from './Resume.pdf';

const App = () => {

  window.addEventListener("scroll",()=>{
      //console.log(window.scrollY);
      if(window.scrollY>90){
         document.getElementById("header").classList.add('active');
         document.getElementById("header").classList.remove("header");
      }
      else{
        document.getElementById("header").classList.add("header");
        document.getElementById("header").classList.remove("active");
      }
  });

  return (
      <div className="App">
          <div className="header" id="header">
              <p>
                  <a href="#home">Home</a>
              </p>
              <p>
                  <a href="#about">About Me</a>
              </p>
              <p>
                  <a href="#skills">Skills</a>
              </p>
              <p>
                  <a href="#eande">Experience</a>
              </p>
              <p>
                  <a href="#projects">Projects</a>
              </p>
              <p>
                  <a href="#contactme">Contact</a>
              </p>
          </div>

          <div className="container">
              <div className="content">
                  <div className="intro" id="home">
                      <img src={IMAGES.working}></img>
                      <div className="introdata">
                          <div className="intromsg"> Hello There!! </div>
                          <div className="introname"> I'm Sidhraj Mori </div>
                          <div className="introtitle"> Software Developer </div>
                          <a href="tel:+91-9106790978">
                              <div className="introphone">
                                  <div className="mailimg">
                                      <img src="https://img.icons8.com/ios/30/ffffff/apple-phone.png" />
                                  </div>
                                  <div>+91 9106790978</div>
                              </div>
                          </a>

                          <a href="mailto:morisidhraj001@gmail.com">
                              <div className="intromail">
                                  <div className="mailimg">
                                      <img src="https://img.icons8.com/ios/30/ffffff/gmail-new.png" />
                                  </div>
                                  <div>morisidhraj001@gmail.com</div>
                              </div>
                          </a>
                          <div className="socials">
                              <div>
                                  <img src="https://img.icons8.com/material-outlined/48/ffffff/instagram-new--v2.png" />
                              </div>
                              <a
                                  href="https://www.linkedin.com/in/sidhraj-mori"
                                  target="_blank"
                              >
                                  <div>
                                      <img src="https://img.icons8.com/material-outlined/48/ffffff/linkedin--v2.png" />
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="about" id="about">
                      <div className="aboutcontent">
                          <div className="heading">> About Me();</div>
                          <div className="aboutdata">
                              I’m driven student leveraging studies in Computer
                              Science seeks real-world experience as a software
                              developer. Motivated to learn, grow and excel as a
                              developer. Skilled in working under pressure and
                              adapting to new situations and challenges to best
                              enhance the organizational brand.
                          </div>
                          <a
                              href={Resume}
                              download="Resume.pdf"
                          >
                              <div className="resume">Download Resume</div>
                          </a>
                      </div>
                      <img src={IMAGES.laptop}></img>
                  </div>{" "}
                  <div className="cando">
                      <div className="heading">> What I can do for you();</div>
                      <div className="candocontent">
                          <Card
                              image={IMAGES.web}
                              heading="Web Development"
                              data=" I’m driven student leveraging studies in Computer Science seeks real-world experience as a software developer."
                          />
                          <Card
                              image={IMAGES.desk}
                              heading="Desktop Development"
                              data=" I’m driven student leveraging studies in Computer Science seeks real-world experience as a software developer."
                          />
                          <Card
                              image={IMAGES.database}
                              heading="Datbase Managment"
                              data=" I’m driven student leveraging studies in Computer Science seeks real-world experience as a software developer."
                          />
                          <Card
                              image={IMAGES.web}
                              heading="UI/UX Designing"
                              data=" I’m driven student leveraging studies in Computer Science seeks real-world experience as a software developer."
                          />
                      </div>
                  </div>
                  <div className="skills" id="skills">
                      <div className="heading">> Skills();</div>
                      <div className="skillslist">
                          <Skill image={IMAGES.react} />
                          <Skill image={IMAGES.next} />
                          <Skill image={IMAGES.node} />
                          <Skill image={IMAGES.express} />
                          <Skill image={IMAGES.spring} />
                          <Skill image={IMAGES.python} />
                          <Skill image={IMAGES.java} />
                          <Skill image={IMAGES.php} />
                          <Skill image={IMAGES.mongo} />
                          <Skill image={IMAGES.mysql} />
                      </div>
                  </div>
                  <div className="eande" id="eande">
                      <div className="heading">
                          > Education And Experience();
                      </div>
                      <div className="eandelist">
                          <Eande
                              head="St Xaviers College, Ahmedabad"
                              info="2019-Present | BCA(Bechelor In Computer Applications)"
                              data={[
                                  "GPA - 8.3",
                                  "Advance Concepts of Programing",
                                  "Object Oriented Programing",
                                  "Dynamic HTML Data Structures and Algorithms",
                              ]}
                          />
                          <Eande
                              head="Silverwings Technologies PVT LTD, Ahmedabad"
                              info="2021-Present | BCA(Bechelor In Computer Applications)"
                              data={[
                                  "Working on a Multiple Society Management Project.",
                                  "Using java for Backend and NextJS for FrontEnd with MySQL as Database.",
                                  "Skills Acquired:- ",
                                  "    ~Servlet Programing",
                                  "    ~MVC structure programing",
                                  "    ~Problem solving",
                              ]}
                          />
                      </div>
                  </div>
                  <div className="projects" id="projects">
                      <div className="heading">> Projects();</div>
                      <div className="projectlist">
                          <a
                              href="https://github.com/sidproj/Tic-Tac-Toe"
                              target="_blank"
                          >
                              <Project
                                  image={IMAGES.reg}
                                  caption="Regression Model"
                              />
                          </a>
                          <a
                              href="https://github.com/sidproj/LinearRegression-ML"
                              target="_blank"
                          >
                              <Project
                                  image={IMAGES.ttt}
                                  caption="TIC-TAC-TOE"
                              />
                          </a>
                      </div>
                  </div>
                  <div className="contactme" id="contactme">
                      <div className="heading">> Get in touch();</div>
                      <div className="contactform">
                          <input type="text" placeholder="Name" id="name" />
                          <input type="text" placeholder="Email" id="email" />
                          <input
                              type="text"
                              placeholder="Subject"
                              id="subject"
                          />
                          <textarea placeholder="Your message" id="msg" />
                      </div>
                      <button id="sendmsg">Send Message</button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
