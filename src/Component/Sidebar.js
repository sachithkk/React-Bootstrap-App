import React, {Component} from 'react';
import '../css/App.css';

//import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import faCameraRetro from '@fortawesome/fontawesome-free-solid/faCameraRetro'

import {Col} from 'react-bootstrap';
import {} from 'react-bootstrap';



class Sidebar extends Component{
    render(){
        return(
         <Col xs={12} md={2} lg={2} className="sidebar">
          <h1>Sidebar</h1>           
         </Col>            
        );
    }
}

export default Sidebar;
//<FontAwesomeIcon icon={faCameraRetro}  className="fa-7x"/>
