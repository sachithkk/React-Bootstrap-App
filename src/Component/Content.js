import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Content extends Component{
    render(){
        return(
            <Col xs={12} md={10} lg={10} className="content"> 
                <h1>Content</h1>         
            </Col>
        );
    }
}

export default Content;