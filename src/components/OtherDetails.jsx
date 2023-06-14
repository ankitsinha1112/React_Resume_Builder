/* eslint-disable no-unused-vars */
import {
	Card,
	CardContent,
	Divider,
	Grid,
	Paper,
	Typography,
	CardHeader,
	Button,
	Container,
} from "@mui/material";
import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import Skills from './Skills';
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CheckCircle, NavigateNext, NavigateBefore } from "@mui/icons-material";

import PropTypes from "prop-types";
// import "./OtherDetails.css";

function OtherDetails({ values, handleChange, nextStep, prevStep }) {
	const navigate = useNavigate();
	const back = (e) => {
		e.preventDefault();
		prevStep();
	};
	const skills = useSelector(state => state.skills)
	const [errorMessage, setErrorMessage] = useState('');
	const continueStep = (e) => {
		e.preventDefault();
		if (skills.length === 0) {
			setErrorMessage('Please atleast select one skill to move forward.');
		  } else {
			nextStep();
			setErrorMessage('');
		  }
	};
	// const handleClick = () => {
	// 	navigate("/view", { replace: true });
	// };

	return (
		<Paper style={{ padding: 8 }}>
			<Card>
				<CardHeader title='Other Details' />
			</Card>
			<CardContent>
				<div style={{ margin: 14 }}>
					<Paper elevation={3}>
						
						<Fragment>
							<Container>

								<Skills></Skills>

							</Container>
						</Fragment>
					</Paper>
					<br />
					<Divider />
				</div>
			</CardContent>
			<Container style={{ margin: 14 }}>
				<Row style={{ marginBottom: "20px" }}>
					<Col xs={2} />
					<Col xs={4}>
						<Button
							variant='contained'
							color='secondary'
							startIcon={<NavigateBefore />}
							onClick={back}
						>
							Back
						</Button>
					</Col>
					<Col xs={4}>
						<Button
							variant='contained'
							color='secondary'
							// onClick={next}
							// disabled
							onClick={continueStep}
							// onClick={handleClick}
						// endIcon={<NavigateNext />}
						>
							Preview
						</Button>
					</Col>
					<Col xs={2} />
				</Row>
				<p className='text-center text-muted'>Page 4 </p>
			</Container>
			<div style={{backgroundColor : "red"}}>
					{errorMessage && <h3>{errorMessage}</h3>}
					</div>

		</Paper>

	);
}
OtherDetails.propTypes = {
	values: PropTypes.objectOf(PropTypes.string),
	handleChange: PropTypes.func,
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
};

export default OtherDetails;
