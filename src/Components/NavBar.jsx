/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavBar ({signIn, setSignIn}){
    
    
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary"> 
    
        <Navbar.Brand as={Link} to="/">Rick & Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                
            {!signIn && (
                <>
                    <Nav.Link as={Link} to="/SignUp">Registro</Nav.Link>
                    <Nav.Link as={Link} to="/SignIn">Ingreso</Nav.Link>
                </>
            )}
            
            <NavDropdown title="Personajes" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/episodes">Episodios</NavDropdown.Item>

            {signIn && (
            <>
            <NavDropdown.Item as={Link} to="/characters/upload">Subir</NavDropdown.Item>
            <Nav.Link onClick={() => setSignIn(false)}>Salir</Nav.Link>
            </>
            )}
            
            </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    </>
    )


}

export default NavBar;