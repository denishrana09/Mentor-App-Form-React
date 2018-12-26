import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class FormHeader extends Component {
    constructor(props){
        super(props);
        this.handleActiveClassChange = this.handleActiveClassChange.bind(this);
    }

    handleActiveClassChange(e){
        var clickedLink = e.currentTarget;
        var data = clickedLink.getAttribute('data-value');
        this.props.onActiveClassChange(data);
    }

    render() {
        //g, l, c
        let FormHeaderClassName = "Form-Header-Col";
        let Active = " active";
        let class1="";
		let class2="";
		let class3="";
		if(this.props.activeClass==='g'){
			class1 = FormHeaderClassName.concat(Active);
			class2 = FormHeaderClassName;
            class3 = FormHeaderClassName;
		}
		if(this.props.activeClass==='l'){
			class1 = FormHeaderClassName;
			class2 = FormHeaderClassName.concat(Active);
			class3 = FormHeaderClassName;
		}
		if(this.props.activeClass==='c'){
			class1 = FormHeaderClassName;
			class2 = FormHeaderClassName;
			class3 = FormHeaderClassName.concat(Active);
		}
        return (
        <div className="FormHeader">
            <Grid>
                <Row>
                    <Col className={class1} xs={4}>
                        <div className="Form-Header-Text">General</div>
                        <a href="#" data-value="g" onClick={this.handleActiveClassChange}><i className="fas fa-circle"></i></a>
                        <div className="line"></div>
                    </Col>
                    <Col className={class2} xs={4}>
                        <div className="Form-Header-Text">Local</div>
                        <a href="#" data-value="l" onClick={this.handleActiveClassChange}><i className="fas fa-circle"></i></a>
                        <div className="line"></div>
                    </Col>
                    <Col className={class3} xs={4}>
                        <div className="Form-Header-Text">Contact</div>
                        <a href="#" data-value="c" onClick={this.handleActiveClassChange}><i className="fas fa-circle"></i></a>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
  }
}

export default FormHeader;