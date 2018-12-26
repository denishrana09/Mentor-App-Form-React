import React, { Component } from 'react';
import { Grid,Row,Col,FormGroup,ControlLabel,FormControl,Radio } from 'react-bootstrap';

class FormContent extends Component {
	constructor(props){
		super(props);
		this.state = { fname:'' }
	}

  	render() {
		//g, l, c
		const activeClass = this.props.activeClass;
		const Active = " active";
		const className = "Form-Header-Col text-muted";
		let class1="";
		let class2="";
		let class3="";
		if(activeClass==='g'){
			class1 = className.concat(Active);
			class2 = className;
			class3 = className;
		}
		if(activeClass==='l'){
			class1 = className;
			class2 = className.concat(Active);
			class3 = className;
		}
		if(activeClass==='c'){
			class1 = className;
			class2 = className;
			class3 = className.concat(Active);
		}
		return(
		<div className="FormContent">
			<Grid className="container">
				<Row>
					<Col className={class1} xs={4}>
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
					<Col className={class2} xs={4}>
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
					<Col className={class3} xs={4}>
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