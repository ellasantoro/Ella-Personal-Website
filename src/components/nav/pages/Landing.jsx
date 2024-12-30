import { Container, Row, Col } from "react-bootstrap";
import {React} from 'react';
import madisonImage from "../../../assets/capitol.jpg";
import { TypeAnimation } from 'react-type-animation';
import "/workspaces/Ella-Personal-Website/src/styles.css";
import {motion} from "motion/react";

export default function Landing(props) {
    return (
        <div className="ombre-background">
            <Container fluid={true} style={{paddingTop: "100px"}}>
                <Row className="align-items-center" style={{paddingLeft: "150px", paddingRight: "100px", paddingTop: "-20px"}}>
                    <Col xs={12} md={6} className="text-center text-md-start">
                        <div className="typing-container">
                            Hello, I'm Ella! I'm
                            <br></br>
                            <TypeAnimation
                                sequence={[
                                    " an IT Intern.", 1000,
                                    " a Computer Science Student.", 1000,
                                    " a Software Developer.", 1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                        <div className="intro">I'm a third-year student at the University of Wisconsin, Madison pursuing a degree in Computer Sciences, and a certificate in Mathematics. In my free time, I enjoy creating computer graphics in Three.JS, 
                        painting with watercolors, and solving puzzles in any shape or form. <br></br><br></br> I currently reside in Madison, WI and work as an IT intern at the Morgridge Center for Public Service. This summer, I'll be interning as a Software Developer
                        with Enterprise Mobility.<br></br><br></br> This website consists of projects where I showcase my favorite creations, a course blog where I reflect on each class I've taken, and an about me section where you can learn more about me! </div>
                    </Col>
                    <Col xs={6} md={6} className="text-left mb-4 mb-md-0">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
                        <img
                            src={madisonImage} 
                            alt="Ella in front of the Madison Capitol Building" 
                            style={{
                                width: "100%",
                                height: "auto", 
                                maxWidth: "375px",
                                borderRadius: "2px",
                            }}
                            className="d-none d-md-block"
                        
                        />
                        </motion.div>
                    </Col>
                </Row>
                <Row className="align-items-center" style={{paddingLeft: "150px", paddingRight: "100px", paddingTop: "20px"}}>
                    <Col className="text-center text-md-start">  
                    <div className="intro">
                        Test
                    </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}
