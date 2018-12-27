import React, { Component } from 'react';
import { Grid,Row,Col,FormGroup,ControlLabel,FormControl,Radio,Button } from 'react-bootstrap';

class FormContent extends Component {
	constructor(props){
		super(props);
		this.state =
		{ 	fname:'',fnameError:false,lname:'',lnameError:false,
			gender:'',genderError:false,class:'',classError:false,
			program:'',programError:false,linkError:false,phoneError:false,
			link:'',phone:'',emailError:false,regionError:false,
			email:'',region:'',street:'',streetError:false,
			dd:'-1',ddError:false,mm:'-1',mmError:false,yy:'-1',yyError:false,mainError:false
		};

		this.handleFNameChange  = this.handleFNameChange.bind(this);
		this.handleLNameChange  = this.handleLNameChange.bind(this);
		this.handleGenderChange  = this.handleGenderChange.bind(this);
		this.handleClassChange  = this.handleClassChange.bind(this);
		this.handleProgramChange  = this.handleProgramChange.bind(this);
		this.handleLinkChange  = this.handleLinkChange.bind(this);
		this.handlePhoneChange  = this.handlePhoneChange.bind(this);
		this.handleMailChange  = this.handleMailChange.bind(this);
		this.handleRegionChange  = this.handleRegionChange.bind(this);
		this.handleStreetChange  = this.handleStreetChange.bind(this);
		this.handleDDChange  = this.handleDDChange.bind(this);
		this.handleMMChange  = this.handleMMChange.bind(this);
		this.handleYYChange  = this.handleYYChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(){
		let fnError = this.state.fnameError;
		let lnError = this.state.lnameError;
		let clError = this.state.clError;
		let liError = this.state.liError;
		let phError = this.state.phError;
		let maError = this.state.maError;
		let reError = this.state.reError;
		let stError = this.state.stError;
		if(!fnError || !lnError || !clError || !liError || !phError || !maError || !reError || !stError){
			this.setState({mainError: true});
			//console.log(this.state.mainError);
			//console.log("errrrrooor");
		}
	}

	handleFNameChange(e){
		let pattern=/^([- \w\d\u00c0-\u024f]+)$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			// document.getElementById('firstNameInput').classList.add("error");
			// document.getElementById('firstNameError').innerHTML = "No spacial characters allowed";
			//console.log("firstname error");
			this.setState({fnameError:true});
		}
		else{
			// document.getElementById('firstNameInput').classList.remove("error");
			// document.getElementById('firstNameError').innerHTML = " ";
			//console.log("no problem");
			this.setState({fnameError:false,fname:first});
		}
	}

	handleLNameChange(e){
		let pattern=/^([- \w\d\u00c0-\u024f]+)$/;
		let last = e.target.value;
		if(pattern.test(last)===false){
			//console.log("lastname error");
			this.setState({lnameError:true});
		}
		else{
			//console.log("no problem");
			this.setState({lnameError:false,lname:last});
		}
	}

	handleGenderChange(e){
		let pattern=/^([- \w\d\u00c0-\u024f]+)$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("gender error");
			this.setState({genderError:true});
		}
		else{
			//console.log("no problem");
			this.setState({genderError:false,gender:first});
		}
	}

	handleClassChange(e){
		let pattern=/^([- \w\d\u00c0-\u024f]+)$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("class error");
			this.setState({classError:true});
		}
		else{
			//console.log("no problem");
			this.setState({classError:false,class:first});
		}
	}

	handleProgramChange(e){
		let pattern=/^([- \w\d\u00c0-\u024f]+)$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("program error");
			this.setState({programError:true});
		}
		else{
			//console.log("no problem");
			this.setState({programError:false,program:first});
		}
	}

	handleLinkChange(e){
		var pattern= /^(http[s]?:\/\/)?([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2}(\/([-~%\.\(\)\w\d]*\/*)*(#[-\w\d]+)?)?$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("Link error");
			this.setState({linkError:true});
		}
		else{
			//console.log("no problem");
			this.setState({linkError:false,link:first});
		}
	}

	handlePhoneChange(e){
		var pattern = /^[0-9]{10}$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("Phone error");
			this.setState({phoneError:true});
		}
		else{
			//console.log("no problem");
			this.setState({phoneError:false,phone:first});
		}
	}

	handleMailChange(e){
		let pattern = /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("Mail error");
			this.setState({emailError:true});
		}
		else{
			//console.log("no problem");
			this.setState({emailError:false,email:first});
		}
	}

	handleRegionChange(e){
		let pattern=/^([- \w\d\u00c0-\u024f]+)$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("Region error");
			this.setState({regionError:true});
		}
		else{
			//console.log("no problem");
			this.setState({regionError:false,region:first});
		}
	}

	handleStreetChange(e){
		let pattern=/^([- \w\d\u00c0-\u024f]+)$/;
		let first = e.target.value;
		if(pattern.test(first)===false){
			//console.log("Street error");
			this.setState({streetError:true});
		}
		else{
			//console.log("no problem");
			this.setState({streetError:false,street:first});
		}
	}

	handleDDChange(e){
		let first = e.target.value;
		if(first === "-1"){
			//console.log("DD error");
			this.setState({ddError:true});
		}
		else{
			//console.log("no problem");
			this.setState({ddError:false,dd:first});
		}
	}

	handleMMChange(e){
		let first = e.target.value;
		if(first === "-1"){
			//console.log("MM error");
			this.setState({mmError:true});
		}
		else{
			//console.log("no problem");
			this.setState({mmError:false,mm:first});
		}
	}

	handleYYChange(e){
		let first = e.target.value;
		if(first === "-1"){
			//console.log("YY error");
			this.setState({yyError:true});
		}
		else{
			//console.log("no problem");
			this.setState({yyError:false,yy:first});
		}
	}

  	render() {
		//g, l, c
		let theMainError = this.state.mainError;
		const activeClass = this.props.activeClass;
		const Active = " active";
		const className = "Form-Header-Col text-muted non-active";
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
		let First="Hide";
		let Last="Hide";
		let Class="Hide";
		let NumberClass="Hide";
		let Mail="Hide";
		let Region="Hide";
		let Street="Hide";
		let Link="Hide";
		let DateClass="Hide";
		let GenderClass="Hide";
		let ProgramClass="Hide";
		if(this.state.fnameError === true){
			First = "First-Error";
		}
		if(this.state.lnameError === true){
			Last = "Last-Error";
		}
		if(this.state.classError === true){
			Class = "Class-Error";
		}
		if(this.state.phoneError === true){
			NumberClass = "Number-Error";
		}
		if(this.state.emailError === true){
			Mail = "Mail-Error";
		}
		if(this.state.regionError === true){
			Region = "Region-Error";
		}
		if(this.state.streetError === true){
			Street = "Street-Error";
		}
		if(this.state.linkError === true){
			Link = "Link-Error";
		}
		if(theMainError){
			if(this.state.fname.length === 0){
				First = "First-Error";
			}
			if(this.state.lname.length === 0){
				Last = "Last-Error";
			}
			if(this.state.class.length === 0){
				Class = "Class-Error";
			}
			if(this.state.phone.length === 0){
				NumberClass = "Number-Error";
			}
			if(this.state.email.length === 0){
				Mail = "Mail-Error";
			}
			if(this.state.region.length === 0){
				Region = "Region-Error";
			}
			if(this.state.street.length === 0){
				Street = "Street-Error";
			}
			if(this.state.link.length === 0){
				Link = "Link-Error";
			}
			if(this.state.dd === "-1" || this.state.mm === "-1" || this.state.yy === "-1"){
				DateClass = "Date-Class-Error";
			}
			if(this.state.gender.length === 0){
				GenderClass = "Gender-Class-Error";
			}
			if(this.state.program.length === 0){
				ProgramClass = "Program-Class-Error";
			}
		}
		return(
		<div className="FormContent">
			<Grid className="container">
				<Row>
					<Col className={class1} sm={4}>
						<FormGroup className="Form-Group" controlId="formFName">
							<ControlLabel className="Form-Label">First Name</ControlLabel>
							<FormControl className="Form-Control"
								onBlur={this.handleFNameChange}
								type="text"
								placeholder="Enter Your Name here"/>
						</FormGroup>
						<div className={First}>First Name is Required</div>
						<FormGroup className="Form-Group" controlId="formLName">
							<ControlLabel className="Form-Label">Last Name</ControlLabel>
							<FormControl className="Form-Control"
								onBlur={this.handleLNameChange}
								type="text"
								placeholder="Enter Your last name" />
						</FormGroup>
						<div className={Last}>Last Name is Required</div>
						<FormGroup className="Form-Group" controlId="formControlsSelect">
							<ControlLabel className="Form-Label" style={{marginBottom:"5px"}}>Date Of Birth</ControlLabel>
							<FormControl className="Date" componentClass="select"
								onBlur={this.handleDDChange}>
								<option value="-1">DD</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</FormControl>
							<FormControl className="Date" componentClass="select"
								onBlur={this.handleMMChange}>
								<option value="-1">MM</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</FormControl>
							<FormControl className="Date" componentClass="select"
								onBlur={this.handleYYChange}>
								<option value="-1">YYYY</option>
								<option value="1">2015</option>
								<option value="2">2016</option>
								<option value="3">2017</option>
								<option value="4">2018</option>
								<option value="5">2019</option>
							</FormControl>
						</FormGroup>
						<div className={DateClass}>Date is Incorrect</div>
						<FormGroup className="Form-Group" controlId="formGender" onBlur={this.handleGenderChange}>
							<ControlLabel className="Form-Label Gender-Label">Gender</ControlLabel>
							<Radio name="radioGroup" value="male" inline>
								<span className="Radio-Name">Male</span>
							</Radio>{' '}
							<Radio name="radioGroup" value="female" className="pull-right" inline style={{marginRight:"15px"}}>
								<span className="Radio-Name">Female</span>
							</Radio>
						</FormGroup>
						<div className={GenderClass}>Gender is Required</div>
					</Col>
					<Col className={class2} sm={4}>
						<FormGroup className="Form-Group" controlId="formCName">
							<ControlLabel className="Form-Label">Class</ControlLabel>
							<FormControl className="Form-Control"
								type="text"
								placeholder="Enter Your Class" onBlur={this.handleClassChange}/>
						</FormGroup>
						<div className={Class}>Class is Required</div>

						<FormGroup className="Form-Group" onBlur={this.handleProgramChange}>
							<div>
								<h4 style={{fontWeight:"600"}}>Program</h4>
							</div>
							<label className="Custom-Radio">Graphic & Web Design
								<input type="radio" name="radio" value="graphics"/>
								<span className="checkmark"></span>
							</label>
							<label className="Custom-Radio">Digital Marketing
								<input type="radio" name="radio" value="digital"/>
								<span className="checkmark"></span>
							</label>
							<label className="Custom-Radio">System Administration
								<input type="radio" name="radio" value="system"/>
								<span className="checkmark"></span>
							</label>
							<label className="Custom-Radio">Programming
								<input type="radio" name="radio" value="programming"/>
								<span className="checkmark"></span>
							</label>
							<label className="Custom-Radio">MS Office
								<input type="radio" name="radio" value="msoffice"/>
								<span className="checkmark"></span>
							</label>
							<label className="Custom-Radio">3D Modeling
								<input type="radio" name="radio" value="3dModeling"/>
								<span className="checkmark"></span>
							</label>
						</FormGroup>
						{/* <FormGroup className="Form-Group" onBlur={this.handleProgramChange}>
							<div>
								<h4 style={{fontWeight:"600"}}>Program</h4>
							</div>
							<Radio className="Radio-Group" value="graphics" name="radioGroup">
								Graphic & Web Design
							</Radio>
							<Radio className="Radio-Group" value="digital" name="radioGroup">
								Digital Marketing
							</Radio>
							<Radio className="Radio-Group" value="system" name="radioGroup">
								System Administration
							</Radio>
							<Radio className="Radio-Group" value="program" name="radioGroup">
								Programming
							</Radio>
							<Radio className="Radio-Group" value="ms office" name="radioGroup">
								MS Office
							</Radio>
							<Radio className="Radio-Group" value="3d" name="radioGroup">
								3D Modeling
							</Radio>
						</FormGroup> */}
						<div className={ProgramClass}>Select perticualr Program</div>
						<FormGroup className="Form-Group" controlId="formLink">
							<ControlLabel className="Form-Label">Link</ControlLabel>
							<FormControl className="Form-Control"
								type="text"
								placeholder="https://"
								onBlur={this.handleLinkChange}/>
						</FormGroup>
						<div className={Link}>Enter Correct Link</div>
					</Col>
					<Col className={class3} sm={4}>
						<FormGroup className="Form-Group" controlId="formPhone">
							<ControlLabel className="Form-Label">Phone</ControlLabel>
							<FormControl className="Form-Control"
								type="text"
								placeholder="Enter your phone" onBlur={this.handlePhoneChange}/>
						</FormGroup>
						<div className={NumberClass}>Enter Correct Phone Number</div>
						<FormGroup className="Form-Group" controlId="formMail">
							<ControlLabel className="Form-Label">Mail</ControlLabel>
							<FormControl className="Form-Control"
								type="text"
								placeholder="Enter your mail" onBlur={this.handleMailChange}/>
						</FormGroup>
						<div className={Mail}>Enter Correct Email</div>
						<FormGroup className="Form-Group" controlId="formAdress">
							<ControlLabel className="Form-Label">Adress</ControlLabel>
							<FormControl className="Form-Control"
								type="text"
								placeholder="Enter your Region" onBlur={this.handleRegionChange}/>
							<div className={Region}>Region is Required</div>
							<FormControl className="Form-Control"
								type="text"
								placeholder="Enter your Street" onBlur={this.handleStreetChange}/>
							<div className={Street}>Street is Required</div>
						</FormGroup>
						<Button className="Form-Button" type="submit" onClick={this.handleSubmit}>
							Submit
						</Button>
					</Col>
				</Row>
			</Grid>
		</div>
		);
  	}
}

export default FormContent;