import React, { Component } from 'react';
import * as comp from 'constants/competitions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competitionsActions from 'actions/competitionsActions';
//import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

  onLigue1Click = () => {
    this.props.competitionsActions.loadCompetition(comp.LIGUE1);
  }

  onLaLigaClick = () => {
    this.props.competitionsActions.loadCompetition(comp.LALIGA);
  }

  render() {
    return (
      <div>
        <button onClick={this.onLigue1Click}>{comp.LIGUE1}</button>
        {' | '}
        <button onClick={this.onLaLigaClick}>{comp.LALIGA}</button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    competitionsActions: bindActionCreators(competitionsActions, dispatch),
  };
}

export default connect(() => {return {};}, mapDispatchToProps)(Header);

// const Header = ({competitionFunc}) => (
//     <Navbar inverse collapseOnSelect>
//         <Navbar.Header>
//             <Navbar.Brand>
//                 <a href="#brand">Supa-Soccer</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//             <Nav>
//                 {Object.keys(competitionFunc).map(key =>
//                     <NavItem
//                         key={competitionFunc[key].id}
//                         onClick={competitionFunc[key].func}>
//                         {key}
//                     </NavItem>
//                 )}
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
// );
