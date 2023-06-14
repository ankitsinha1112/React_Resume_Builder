import {
	Card,
	CardContent,
	Divider,
	Grid,
	Paper,
	TextField,
	Typography,
	// withStyles,
	CardHeader,
	Button,
	Container,
	InputAdornment,
	// styled,
} from "@mui/material";
// import { BackHandSharp } from "@mui/icons-material";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { NavigateBefore, NavigateNext, CheckCircle } from "@mui/icons-material";

import DescriptionIcon from "@mui/icons-material/Description";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import BusinessIcon from "@mui/icons-material/Business";
// import NavigateBefore from "@mui/icons-material/NavigateBefore";
import PropTypes from "prop-types";
// import { styled } from "@mui/styles";
// import { CardHeader } from "reactstrap"

function Experience({ values, handleChange, nextStep, prevStep }) {
	const [section, setSection] = useState(false);
	// const classes = useStyles();
	const addSectionHandler = () => {
		setSection((prevCheck) => !prevCheck);
	};
	const [errorMessage, setErrorMessage] = useState('');
	const next = (e) => {
		e.preventDefault();
		if (!values.institute1 || !values.position1 || !values.duration1 || !values.experienceDescription1 ) {
			setErrorMessage('Please fill in all required fields.');
		  } else {
			if (!values.institute2 && !values.position2 && !values.duration2 && !values.experienceDescription2 ) {
				nextStep();
				setErrorMessage('');
			}
			else{
				setErrorMessage('Please fill in all required fields.');
			}
		  }
	};

	const back = (e) => {
		e.preventDefault();
		prevStep();
	};

	return (
		<Paper style={{ padding: 8 }}>
			<Card>
				<CardHeader title='Experience Details' />
			</Card>
			<CardContent>
				<div style={{ margin: 14 }}>
					<Paper elevation={3}>
						<Typography align='left' variant='h6' style={{ margin: 14 }}>
							<CheckCircle />
							Organization 1
						</Typography>
						<Grid container spacing={2} alignItems='center' lg={12}>
							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='institute1'
									label='Institue/Organisation'
									style={{ width: "90%" }}
									required
									value={values.institute1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<BusinessIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>
							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='position1'
									label='Position'
									style={{ width: "90%" }}
									required
									value={values.position1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<EventSeatIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='duration1'
									label='Duration'
									style={{ width: "90%" }}
									required
									value={values.duration1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<TimelapseIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>

							<Grid item md={12} sm={12} xs={12} lg={12}>
								<TextField
									margin='dense'
									label='Description'
									variant='outlined'
									style={{ width: "97%" }}
									name='experienceDescription1'
									required
									value={values.experienceDescription1}
									onChange={handleChange}
									InputProps={{
										endAdornment: (
											<InputAdornment position='start'>
												<DescriptionIcon />
											</InputAdornment>
										),
									}}
								/>
							</Grid>
						</Grid>
					</Paper>
					<br />
					<Divider />

					{section && (
						<Paper elevation={3}>
							<Typography align='left' variant='h6' style={{ margin: 14 }}>
								<CheckCircle />
								Organization 2
							</Typography>
							<Grid container spacing={2} alignItems='center' lg={12}>
								<Grid item md={4} sm={12} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='institute2'
										label='Institue/Organisation'
										style={{ width: "90%" }}
										required
										value={values.institute2}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<BusinessIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>
								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='position2'
										label='Position'
										style={{ width: "90%" }}
										required
										value={values.position2}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<EventSeatIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>

								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='duration2'
										label='Duration'
										style={{ width: "90%" }}
										required
										value={values.duration2}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<TimelapseIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>

								<Grid item md={12} sm={12} xs={12} lg={12}>
									<TextField
										margin='dense'
										label='Description'
										variant='outlined'
										style={{ width: "97%" }}
										name='experienceDescription2'
										required
										value={values.experienceDescription2}
										onChange={handleChange}
										InputProps={{
											endAdornment: (
												<InputAdornment position='start'>
													<DescriptionIcon />
												</InputAdornment>
											),
										}}
									/>
								</Grid>
							</Grid>
						</Paper>
					)}
				</div>
			</CardContent>
			<Container style={{ margin: 14 }}>
				<Row>
					<Col>
						<Button
							variant='contained'
							style={{ marginBottom: 20 }}
							color='primary'
							onClick={addSectionHandler}
						>
							{" "}
							{section
								? "Remove Second Organization"
								: "Add Second Organization"}
						</Button>
					</Col>
				</Row>

				<Row style={{ marginBottom: 20 }}>
					<Col xs={2} />
					<Col xs={4}>
						<Button
							variant='contained'
							color='secondary'
							onClick={back}
							startIcon={<NavigateBefore />}
						>
							Back
						</Button>
					</Col>
					<Col xs={4}>
						<Button
							variant='contained'
							color='secondary'
							onClick={next}
							endIcon={<NavigateNext />}
						>
							Next
						</Button>
					</Col>
					<Col xs={2} />
				</Row>
				<p className='text-center text-muted'>Page 3</p>
			</Container>
			<div style={{backgroundColor : "red"}}>
					{errorMessage && <h3>{errorMessage}</h3>}
					</div>
		</Paper>
	);
}
Experience.propTypes = {
	values: PropTypes.objectOf(PropTypes.string),
	handleChange: PropTypes.func,
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default Experience;
