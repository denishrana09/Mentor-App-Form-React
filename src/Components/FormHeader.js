import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class FormHeader extends Component {
  render() {
    return (
      <div className="FormHeader">
        <Grid>
            <Row>
                <Col className="Form-Header-Col" xs={4}>
                    <div className="Form-Header-Text">General</div>
                    <i className="fas fa-circle"></i>
                    <div class="line"></div>
                </Col>
                <Col className="Form-Header-Col" xs={4}>
                    <div className="Form-Header-Text">Local</div>
                    <i className="fas fa-circle"></i>
                    <div class="line"></div>
                </Col>
                <Col className="Form-Header-Col" xs={4}>
                    <div className="Form-Header-Text">Contact</div>
                    <i className="fas fa-circle"></i>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default FormHeader;