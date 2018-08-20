import React from "react";
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import './index.css'

export default (props) => (
    <Navbar color="dark" dark expand="md" className="nav">
        <div className="container">
            <Link className="navbar-brand" to="/">Multicast</Link>
            <NavbarToggler onClick={props.toggler} />

            <Collapse isOpen={props.open} navbar>
                {
                    props.logged ? (
                        <Nav className="ml-auto" navbar>

                            <Link className="nav-link" to="/">Inicio</Link>
                            <Link className="nav-link" to="/test">Prueba</Link>

                        </Nav>
                    )
                        :
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/signin">Inicia sesión</Link>
                            </NavItem>
                        </Nav>
                }
            </Collapse>

        </div>
    </Navbar>
)