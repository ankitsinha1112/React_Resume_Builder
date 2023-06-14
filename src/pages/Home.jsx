import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		height: 200vh;
	}
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		width: 400px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Left = styled.div`
	background-color: aliceblue;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	@media only screen and (max-width: 768px) {
		flex: 1;
		align-items: center;
	}
`;

const Title = styled.h1`
	align-items: center;
	text-align: center;
	justify-content: center;
	color: #240046;
	width: 60%;
	/* margin: auto; */
	margin: 25px auto;
	font-size: 74px;
	@media only screen and (max-width: 768px) {
		text-align: center;
	}
`;
const Desc = styled.p`
	width: 60%;
	margin: 25px auto;
	font-size: 24px;
	color: #22007c;
	@media only screen and (max-width: 768px) {
		padding: 20px;
		text-align: center;
	}
`;

const Button = styled.button`
	background-color: #22007c;
	color: white;
	margin: 25px auto;
	font-weight: 500;
	width: 180px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Right = styled.div`
	background-color: #b8c0ff;
	flex: 1;
	position: relative;
	@media only screen and (max-width: 768px) {
		flex: 1;
		width: 100vh;
	}
`;
const Img = styled.img`
	width: 700px;
	height: 500px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		to {
			transform: translateY(20px);
		}
	}
	@media only screen and (max-width: 768px) {
		width: 450px;
		height: 450px;
	}
`;

const Home = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/create", { replace: true });
	};

	return (
		<Section>
			<Container>
				<Left>
					<Title>Create a job ready resume in minutes</Title>
					<Desc>
						Create your resume easily with our free builder and professional
						templates
					</Desc>
					<Button onClick={handleClick}>Build My Resume</Button>
				</Left>
				<Right>
					<Img src='/Resume-Template.jpg'></Img>
				</Right>
			</Container>
		</Section>
	);
};

export default Home;
