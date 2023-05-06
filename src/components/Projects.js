import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import instaClone from "../assets/img/instaClone.PNG";
import fbClone from "../assets/img/fbClone.PNG";
import youtubeClone from "../assets/img/youtubeClone.PNG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import java from '../assets/img/logos/java.png';
import angular from '../assets/img/logos/angular.png';
import next from '../assets/img/logos/next.png';
import mysql from '../assets/img/logos/mysql.png';
import mongo from '../assets/img/logos/mongo.png';
import tailwind from '../assets/img/logos/tailwind.png';
import react from '../assets/img/logos/react.png';
import spring from '../assets/img/logos/spring.png';
import fb from '../assets/img/logos/fb.png';
import nodejs from '../assets/img/logos/nodejs.png';
import kafka from '../assets/img/logos/kafka.png';
import rxjs from '../assets/img/logos/rxjs.png';

export const Projects = () => {

  const projects = [
    {
      title: "Instagram clone",
      description: "A PWA app (technology -ReactJs, NodeJS, Firebase, MUI, socket.IO), which comes up with features like Posting, messaging, creating stories, video call, etc",
      imgUrl: instaClone,
      techStack : [react, nodejs, fb, tailwind],
      gitUrl : 'https://github.com/tanmayrsm/instagram-react-clone'
    },
    {
      title: "Facebook clone",
      description: "A webapp, covering features like adding posts, instant messaging, important pings through emails etc. (technology - nextJs, spring boot, MySQL, Kafka)",
      imgUrl: fbClone,
      techStack : [next, react, mysql, spring, kafka],
      gitUrl : 'https://github.com/tanmayrsm/fb-clone'
    },
    {
      title: "Youtube clone",
      description: "Youtube like app, including functionalities like upload video, like , add comment, etc. (technology - Angular 12, Java 11, Spring boot, mongo DB, firebase)",
      imgUrl: youtubeClone,
      techStack : [angular, spring, java, mongo, fb, rxjs],
      gitUrl : 'https://github.com/tanmayrsm/demo-clone'
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>Personal projects, developed for increasing learning curve and expand my horizon of tech stack</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
