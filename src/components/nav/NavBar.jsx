import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {motion} from "motion/react";
export default function NavBar(props) {
    return (
        <Navbar sticky="top" expand="sm" collapseOnSelect>
            <Container fluid className="d-flex">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}>
                            <Nav.Link as={Link} to="/" className="mx-5" style={{ fontFamily: "Baskerville", fontSize: "20px", color: "black" }}>Home</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}>
                            <Nav.Link as={Link} to="/projects" className="mx-5" style={{ fontFamily: "Baskerville", fontSize: "20px", color: "black" }}>Projects</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}>
                            <Nav.Link as={Link} to="/course-blog" className="mx-5" style={{ fontFamily: "Baskerville", fontSize: "20px", color: "black" }}>Course Blog</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}>
                            <Nav.Link as={Link} to="/about-me" className="mx-5" style={{ fontFamily: "Baskerville", fontSize: "20px", color: "black" }}>About Me</Nav.Link>
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
