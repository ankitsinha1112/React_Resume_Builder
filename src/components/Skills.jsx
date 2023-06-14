import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAddCircleOutline, MdEdit, MdClose, MdOutlineCancel } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ImCheckmark, ImCross } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import {
	Typography,
} from "@mui/material";

import { CheckCircle } from "@mui/icons-material";
function Skills() {
  const skillSuggestions = [
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'Python',
    'Java',
    'C++',
    'C#',
    'SQL',
    'Git',
    'Agile Methodology',
    'Scrum',
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Leadership',
    'Time Management',
    'Project Management',
    'UI/UX Design',
    'Responsive Web Design',
    'RESTful APIs',
    'JSON',
    'Databases',
    'Data Analysis',
    'Data Visualization',
    'Machine Learning',
    'Artificial Intelligence',
    'Cloud Computing',
    'AWS',
    'Azure',
    'Google Cloud Platform',
    'DevOps',
    'Linux',
    'Windows',
    'Networking',
    'Cybersecurity',
    'Mobile App Development',
    'iOS',
    'Android',
    'Ruby',
    'PHP',
    'WordPress',
    'SEO',
    'Content Management Systems',
    'Digital Marketing',
    'Social Media Management',
    'Graphic Design',
    'Video Editing',
    'Copywriting',
    'Technical Writing',
    'Customer Service',
    'Salesforce',
  ];
  
  const skills = useSelector(state => state.skills)
  const dispatch = useDispatch();
  const {addSkill, removeSkill} = bindActionCreators(actionCreators, dispatch);

  // const [skills, setSkills] = useState([]);
  const [show, setShow] = useState(false);
  const [Alert, setAlert] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  }
  const handleShow = () => setShow(true);
  const [isEdit, setIsEdit] = useState(false);
  const [validated, setValidated] = useState(false);

  const [input, setInput] = useState("")
  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSkills = (e) => {
    e.preventDefault();
    const valid = e.currentTarget;
    if (!valid.checkValidity()) {
      setValidated(true);
    }
    else {
      setIsEdit(true);
      addSkill(input)
      // setSkills([...skills, input]);
      setInput("");
    }
  }

  const handleAlertClose = () => setAlert(false);
  const handleAlert = (id) => {
    setDeleteId(id)
    setAlert(true);
  }
  const handleDelete = (id) => {
    removeSkill(id)
    setAlert(false);
  }
  useEffect(()=>{
    if (skills.length === 0) {
      setIsEdit(false);
    }
  },[skills])

  return (
    <Row className="justify-content-center mt-2">
      <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
      <Typography align='left' variant='h6' style={{ margin: 14 }}>
							<CheckCircle />
							Skills
						</Typography>
        {!isEdit && <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow} />}
        {isEdit && <MdEdit size={30} className="rounded edit" onClick={handleShow} />}
      </Col>
      <Col md={8} sm={12}>
        <Row className="border-bottom pt-3">
          <Col md={12} className="d-flex flex-wrap">
            {
              skills.map((items, id) => {
                return (
                  <p className="technology rounded" key={id}>{items}</p>
                )
              })
            }


          </Col>
        </Row>

      </Col>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Skills</Modal.Title>
          <MdClose size={30} className="rounded edit" onClick={handleClose} />
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} className="d-flex align-item-start mb-2" onSubmit={handleSkills}>
            <Form.Group className="">
              <Form.Control required type="text" size="sm" placeholder="Enter Skill" value={input} onChange={handleInput} />
            </Form.Group>
            <button type="submit" className="rounded edit m-0 mx-2">
              Add Skill
            </button>
          </Form>
          <hr></hr>
          <div className="d-flex flex-wrap">
            {
              skills.map((items, id) => {
                return (
                  <p key={id} className="technology rounded ">{items} &nbsp; <MdOutlineCancel className="delete rounded" onClick={() => { handleAlert(id) }} /></p>
                )
              })
            }
          </div>
        </Modal.Body>

      </Modal>
      <Modal show={Alert} onHide={handleAlertClose} className="text-center" size="sm" centered>
        <Modal.Body>
          <h4>Are you sure ?</h4>
          <ImCheckmark size={30} className="rounded edit" onClick={() => { handleDelete(deleteId) }} />
          <ImCross size={25} className="rounded edit" onClick={handleAlertClose} />
        </Modal.Body>
      </Modal>
    </Row>
  )
}

export default Skills