import { NavigateBefore, NavigateNext } from "@mui/icons-material";
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
	// styled,
} from "@mui/material";
// import { styled } from "@mui/styles";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function Education({ values, handleChange, nextStep, prevStep }) {
	const [section, setSection] = useState(false);
	// const classes = useStyles();
	const addSectionHandler = () => {
		setSection((prevCheck) => !prevCheck);
	};
	
	const [errorMessage, setErrorMessage] = useState('');
	const next = (e) => {
		e.preventDefault();
		if (!values.college || !values.fromyear1 || !values.toyear1 || !values.qualification1 || !values.description1 ) {
			setErrorMessage('Please fill in all required fields.');
		  } else {
			if (!values.school && !values.fromyear2 && !values.toyear2 && !values.qualification2 && !values.description2 ) {
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
				<CardHeader title='Education Details' />
			</Card>
			<CardContent>
				<div className={{ margin: 14 }}>
					<Paper elevation={3}>
						<Typography align='left' variant='h6' style={{ margin: 14 }}>
							Education 1
						</Typography>
						<Grid container spacing={2} alignItems='center' lg={12}>
							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='college'
									label='College/Unviersity'
									style={{ width: "80%" }}
									required
									value={values.college}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='fromyear1'
									label='From Year'
									type='date'
									style={{ width: "80%" }}
									required
									value={values.fromyear1}
									onChange={handleChange}
								/>
							</Grid>

							<Grid item md={4} sm={6} xs={12} lg={4}>
								<TextField
									margin='dense'
									variant='outlined'
									name='toyear1'
									type='date'
									label='To Year'
									style={{ width: "80%" }}
									required
									value={values.toyear1}
									onChange={handleChange}
								/>
							</Grid>

							<Grid item md={4} sm={12} xs={12} lg={4}>
								<TextField
									margin='dense'
									label='Qualification'
									variant='outlined'
									style={{ width: "80%" }}
									name='qualification1'
									required
									value={values.qualification1}
									onChange={handleChange}
								/>
							</Grid>

							<Grid item md={8} sm={12} xs={12} lg={8}>
								<TextField
									margin='dense'
									label='Description'
									variant='outlined'
									style={{ width: "90%" }}
									name='description1'
									required
									value={values.description1}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
					</Paper>
					<br />
					<Divider />

					{section && (
						<Paper elevation={3}>
							<Typography align='left' variant='h6' style={{ margin: 14 }}>
								Education 2
							</Typography>
							<Grid container spacing={2} alignItems='center' lg={12}>
								<Grid item md={4} sm={12} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='school'
										label='School'
										style={{ width: "80%" }}
										required
										value={values.school}
										onChange={handleChange}
									/>
								</Grid>
								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='fromyear2'
										label='From Year'
										type='date'
										style={{ width: "80%" }}
										required
										value={values.fromyear2}
										onChange={handleChange}
									/>
								</Grid>

								<Grid item md={4} sm={6} xs={12} lg={4}>
									<TextField
										margin='dense'
										variant='outlined'
										name='toyear2'
										label='To Year'
										type='date'
										style={{ width: "80%" }}
										required
										value={values.toyear2}
										onChange={handleChange}
									/>
								</Grid>

								<Grid item md={4} sm={12} xs={12} lg={4}>
									<TextField
										margin='dense'
										label='Qualification'
										variant='outlined'
										style={{ width: "80%" }}
										name='qualification2'
										required
										value={values.qualification2}
										onChange={handleChange}
									/>
								</Grid>

								<Grid item md={8} sm={8} xs={8} lg={8}>
									<TextField
										margin='dense'
										label='Description'
										variant='outlined'
										style={{ width: "90%" }}
										name='description2'
										required
										value={values.description2}
										onChange={handleChange}
									/>
								</Grid>
							</Grid>
						</Paper>
					)}
				</div>
			</CardContent>
			<Container style={{ margin: 14 }}>
				{/* {!section && ( */}
				<Row>
					<Col>
						<Button
							variant='contained'
							style={{ marginBottom: 20 }}
							color='primary'
							onClick={addSectionHandler}
						>
							{" "}
							{section ? "Remove Second Education" : "Add Second Education"}
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
				<p className='text-center text-muted'>Page 2</p>
			</Container>
			<div style={{backgroundColor : "red"}}>
					{errorMessage && <h3>{errorMessage}</h3>}
					</div>
		</Paper>
	);
}
Education.propTypes = {
	values: PropTypes.objectOf(PropTypes.string),
	handleChange: PropTypes.func,
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default Education;
