import React, { Component } from 'react';
import { Grid,Row,Col,FormGroup,ControlLabel,FormControl,Radio } from 'react-bootstrap';

class FormContent extends Component {
  render() {
    return (
      <div className="FormContent">
        <Grid className="container">
            <Row>
                <Col className="Form-Header-Col text-muted" xs={4}>
                    <FormGroup className="Form-Group" controlId="formFName">
                        <ControlLabel className="Form-Label">First Name</ControlLabel>
						<FormControl className="Form-Control"
							type="text"
							placeholder="Enter Your Name here" />
                    </FormGroup>
					<FormGroup className="Form-Group" controlId="formLName">
                        <ControlLabel className="Form-Label">Last Name</ControlLabel>
						<FormControl className="Form-Control"
							type="text"
							placeholder="Enter Your last name" />
                    </FormGroup>
					<FormGroup className="Form-Group" controlId="formControlsSelect">
						<ControlLabel className="Form-Label" style={{marginBottom:"5px"}}>Date Of Birth</ControlLabel>
						<FormControl className="Date" componentClass="select">
							<option value="-1">DD</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</FormControl>
						<FormControl className="Date" componentClass="select">
							<option value="-1">MM</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</FormControl>
						<FormControl className="Date" componentClass="select">
							<option value="-1">YYYY</option>
							<option value="1">2015</option>
							<option value="2">2016</option>
							<option value="3">2017</option>
							<option value="4">2018</option>
							<option value="5">2019</option>
						</FormControl>
					</FormGroup>
					<div className="Form-Group">
						<h4>Gender</h4>
						<div className="pull-left">
							<Radio className="Gender-Radio" readOnly>
								<span className="Radio-Name">Male</span>
							</Radio>
						</div>
						<div className="pull-right" style={{marginRight:"20px"}}>
							<Radio className="Gender-Radio" readOnly>
								<span className="Radio-Name">Female</span>
							</Radio>
						</div>
					</div>
                </Col>
                <Col className="Form-Header-Col text-muted active" xs={4}>
                    <FormGroup className="Form-Group" controlId="formCName">
                        <ControlLabel className="Form-Label">Class</ControlLabel>
						<FormControl className="Form-Control"
							type="text"
							placeholder="Enter Your Class" />
                    </FormGroup>
					<FormGroup className="Form-Group">
						<div>
							<h4 style={{fontWeight:"600"}}>Program</h4>
						</div>
						<Radio className="Radio-Group" name="radioGroup">
							Graphic & Web Design
						</Radio>
						<Radio className="Radio-Group" name="radioGroup">
							Digital Marketing
						</Radio>
						<Radio className="Radio-Group" name="radioGroup">
							System Administration
						</Radio>
						<Radio className="Radio-Group" name="radioGroup">
							Programming
						</Radio>
						<Radio className="Radio-Group" name="radioGroup">
							MS Office
						</Radio>
						<Radio className="Radio-Group" name="radioGroup">
							3D Modeling
						</Radio>
					</FormGroup>
					<FormGroup className="Form-Group" controlId="formLink">
                        <ControlLabel className="Form-Label">Link</ControlLabel>
						<FormControl className="Form-Control"
							type="text"
							placeholder="https://"/>
                    </FormGroup>
                </Col>
				<Col className="Form-Header-Col text-muted" xs={4}>
                    <FormGroup className="Form-Group" controlId="formPhone">
                        <ControlLabel className="Form-Label">Phone</ControlLabel>
						<FormControl className="Form-Control"
							type="text"
							placeholder="Enter your phone" />
                    </FormGroup>
					<FormGroup className="Form-Group" controlId="formMail">
                        <ControlLabel className="Form-Label">Mail</ControlLabel>
						<FormControl className="Form-Control"
							type="text"
							placeholder="Enter your mail" />
                    </FormGroup>
					<FormGroup className="Form-Group" controlId="formAdress">
                        <ControlLabel className="Form-Label">Adress</ControlLabel>
						<FormControl className="Form-Control"
							type="text"
							placeholder="Enter your Region" />
						<FormControl className="Form-Control"
							type="text"
							placeholder="Enter your Street" />
                    </FormGroup>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default FormContent;