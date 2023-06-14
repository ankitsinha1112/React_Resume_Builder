import { Component } from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Education from "../components/Education";
import OtherDetails from "../components/OtherDetails";
import VIewResume from "./VIewResume";

export class CreateResume extends Component {
	state = {
		step: 1,
		// Personal Profile Details...
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		website: "",
		desc: "",
		github: "",
		linkedin: "",
		facebook: "",
		instagram: "",

		// Education Information
		college: "",
		fromyear1: "",
		toyear1: "",
		qualification1: "",
		description1: "",
		school: "",
		fromyear2: "",
		toyear2: "",
		qualification2: "",
		description2: "",

		// Project Information...
		title1: "",
		link1: "",
		projectDescription1: "",
		title2: "",
		link2: "",
		projectDescription2: "",
		title3: "",
		link3: "",
		projectDescription3: "",

		// Experience Information
		institute1: "",
		position1: "",
		duration1: "",
		experienceDescription1: "",
		institute2: "",
		position2: "",
		duration2: "",
		experienceDescription2: "",

		// Extra Information
		skill1: "",
		skill2: "",
		skill3: "",
		skill4: "",
		skill5: "",
		skill6: "",
		interest1: "",
		interest2: "",
		interest3: "",
		interest4: "",
		interest5: "",
		interest6: "",
	};

	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	handleChange = ({ target: { value, name } }) => {
		this.setState({ [name]: value });
	};

	render() {
		const { step } = this.state;
		const {
			// Profile-Information
			firstname,
			lastname,
			email,
			phone,
			website,
			desc,
			github,
			linkedin,
			twitter,
			facebook,
			instagram,

			// Education Information
			college,
			fromyear1,
			toyear1,
			qualification1,
			description1,
			school,
			fromyear2,
			toyear2,
			qualification2,
			description2,

			// Project Information...
			title1,
			link1,
			projectDescription1,
			title2,
			link2,
			projectDescription2,
			title3,
			link3,
			projectDescription3,

			// Experience Information
			institute1,
			position1,
			duration1,
			experienceDescription1,
			institute2,
			position2,
			duration2,
			experienceDescription2,

			// Extra Information
			skill1,
			skill2,
			skill3,
			skill4,
			skill5,
			skill6,
			interest1,
			interest2,
			interest3,
			interest4,
			interest5,
			interest6,
		} = this.state;
		const values = {
			// Profile-Information
			firstname,
			lastname,
			email,
			phone,
			website,
			desc,
			github,
			linkedin,
			twitter,
			facebook,
			instagram,

			// Education Information
			college,
			fromyear1,
			toyear1,
			qualification1,
			description1,
			school,
			fromyear2,
			toyear2,
			qualification2,
			description2,

			// Project Information...
			title1,
			link1,
			projectDescription1,
			title2,
			link2,
			projectDescription2,
			title3,
			link3,
			projectDescription3,

			// Experience Information
			institute1,
			position1,
			duration1,
			experienceDescription1,
			institute2,
			position2,
			duration2,
			experienceDescription2,

			// Extra Information
			skill1,
			skill2,
			skill3,
			skill4,
			skill5,
			skill6,
			interest1,
			interest2,
			interest3,
			interest4,
			interest5,
			interest6,
		};

		switch (step) {
			case 1:
				return (
					<div>
						<NavBar />
						<div className='App mt-3'>
							<div className='container col-lg-10 mx-auto text-center'>
								<Profile
									nextStep={this.nextStep}
									handleChange={this.handleChange}
									values={values}
									save={this.save}
								/>
							</div>
						</div>
					</div>
				);
			case 2:
				return (
					<div>
						<NavBar />
						<div className='App mt-3'>
							<div className='container col-lg-10 mx-auto text-center'>
								<Education
									nextStep={this.nextStep}
									prevStep={this.prevStep}
									handleChange={this.handleChange}
									values={values}
									save={this.save}
								/>
							</div>
						</div>
					</div>
				);
			case 3:
				return (
					<div>
						<NavBar />
						<div className='App mt-3'>
							<div className='container col-lg-10 mx-auto text-center'>
								<Experience
									nextStep={this.nextStep}
									prevStep={this.prevStep}
									handleChange={this.handleChange}
									values={values}
									save={this.save}
								/>
							</div>
						</div>
					</div>
				);
			case 4:
				return (
					<div>
						<NavBar />
						<div className='App mt-3'>
							<div className='container col-lg-10 mx-auto text-center'>
								<OtherDetails
									prevStep={this.prevStep}
									nextStep={this.nextStep}
									handleChange={this.handleChange}
									values={values}
									save={this.save}
								/>
							</div>
						</div>
					</div>
				);
			case 5:
				return (
					<div>
						<NavBar />
						<div className='App mt-3'>
							<div className='container col-lg-10 mx-auto text-center'>
							<VIewResume
									prevStep={this.prevStep}
									handleChange={this.handleChange}
									values={values}
									save={this.save}
								/>
							</div>
						</div>
					</div>
				);
			default:
				return <div />;
		}
	}
}

export default CreateResume;

//  case 3:
//  	return (
//  		<div>
//  			<NavBar />
//  			<div className='App mt-3'>
//  				<div className='container col-lg-8 mx-auto text-center'>
//  					<Projects
//  						nextStep={this.nextStep}
//  						prevStep={this.prevStep}
//  						handleChange={this.handleChange}
//  						values={values}
//  						save={this.save}
//  					/>
//  				</div>
//  			</div>
//  		</div>
//  	);
