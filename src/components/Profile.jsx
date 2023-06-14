import React, { useState } from "react";
// TextField
// import { TextField, Button, Container } from "@material-ui/core";
import {
	Card,
	CardHeader,
	CardContent,
	InputAdornment,
	Grid,
	Paper,
	TextField,
	Button,
	Container,
	// styled,
	// IconButton,
} from "@mui/material";
// import { styled } from "@mui/styles";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InputAdornment from "@material-ui/core/InputAdornment";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Profile = ({ values, handleChange, nextStep }) => {
	const [errorMessage, setErrorMessage] = useState('');
	const continueStep = (e) => {
		e.preventDefault();
		if (!values.phone || !values.firstname || !values.lastname || !values.email || !values.website ) {
			setErrorMessage('Please fill in all required fields.');
		  } else {
			nextStep();
			setErrorMessage('');
		  }
	};
	
	return (
		<Paper className='p-2 w-auto'>
			<Card>
				<CardHeader title='Personal Details' />
			</Card>
			<CardContent>
				<div className='m-3'>
					<Grid container spacing={2} alignItems='center' lg={12}>
						<Grid item md={6} sm={12} xs={12} lg={6}>
							<TextField
								margin='dense'
								variant='outlined'
								name='firstname'
								label='First Name'
								style={{ width: "80%" }}
								required={true}
								value={values.firstname}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item md={6} sm={12} xs={12} lg={6}>
							<TextField
								margin='dense'
								label='Last Name'
								variant='outlined'
								style={{ width: "80%" }}
								name='lastname'
								required
								value={values.lastname}
								onChange={handleChange}
							/>
						</Grid>

						<Grid item md={6} sm={12} xs={12} lg={6}>
							<TextField
								margin='dense'
								label='Email'
								variant='outlined'
								name='email'
								required
								style={{ alignItems: "left", width: "80%" }}
								value={values.email}
								onChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<EmailIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item lg={6} xs={12} sm={12} md={6}>
							<TextField
								margin='dense'
								label='Phone Number'
								variant='outlined'
								name='phone'
								required
								style={{ alignItems: "left", width: "80%" }}
								value={values.phone}
								onChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<PhoneIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={6} sm={12} xs={12} lg={6}>
							<TextField
								margin='dense'
								label='GitHub'
								variant='outlined'
								name='github'
								style={{ alignItems: "left", width: "80%" }}
								value={values.github}
								onChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<GitHubIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={6} sm={12} xs={12} lg={6}>
							<TextField
								margin='dense'
								label='Linked In'
								variant='outlined'
								name='linkedin'
								style={{ alignItems: "left", width: "80%" }}
								value={values.linkedin}
								onChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<LinkedInIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={6} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								label='Describe Yourself'
								variant='outlined'
								name='desc'
								style={{ alignItems: "left", width: "90%" }}
								value={values.desc}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item md={6} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								label='Address'
								variant='outlined'
								name='website'
								required
								style={{ alignItems: "left", width: "90%" }}
								value={values.website}
								onChange={handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<HomeIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
					<Container style={{ margin: 14 }}>
						<Row>
							<Col lg={2} xs={5} />
							<Col lg={4} xs={5}>
								<Button
									variant='contained'
									color='secondary'
									onClick={continueStep}
									disabled
									startIcon={<NavigateBefore />}
								>
									Back
								</Button>
							</Col>
							<Col lg={4} xs={5}>
								<Button
									variant='contained'
									color='secondary'
									onClick={continueStep}
									endIcon={<NavigateNext />}
								>
									Next
								</Button>
							</Col>
							<Col lg={2} xs={5} />
						</Row>
						<p className='text-center text-muted'>Page 1</p>
					</Container>
					<div style={{backgroundColor : "red"}}>
					{errorMessage && <h3>{errorMessage}</h3>}
					</div>
				</div>
			</CardContent>
		</Paper>
	);
};
Profile.propTypes = {
	values: PropTypes.objectOf(PropTypes.string),
	handleChange: PropTypes.func,
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default Profile;
