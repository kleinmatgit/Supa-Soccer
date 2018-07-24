import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = ({competitionFunc}) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">Supa-Soccer</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                {Object.keys(competitionFunc).map(key => 
                    <NavItem 
                        key={competitionFunc[key].id}
                        onClick={competitionFunc[key].func}>
                        {key}
                    </NavItem>
                )}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
