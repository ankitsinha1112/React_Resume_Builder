// import React from "react";
import {
	Typography,
	Button,
} from "@mui/material";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../components/NavBar";
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import {BsLinkedin,BsGithub,BsGlobe} from 'react-icons/bs'
import {GiGraduateCap} from 'react-icons/gi'
import {HiLocationMarker,HiOfficeBuilding,HiOutlineMail,HiPhone} from 'react-icons/hi'

import { Stack } from 'react-bootstrap'

import PropTypes from "prop-types";
function VIewResume({ values, handleChange, prevStep }) {
	const skills = useSelector(state => state.skills)
	const back = (e) => {
		e.preventDefault();
		prevStep();
	};
	const GetIcon = (icon) => {
		switch(icon.icon){
			case "HiOutlineMail":
			  return <HiOutlineMail size={30}/>
			case "HiPhone":
			  return <HiPhone size={30}/>
			case "BsLinkedin":
			  return <BsLinkedin size={30}/>
			case "BsGithub":
			  return <BsGithub size={30}/>
			case "BsGlobe":
			  return <BsGlobe size={30}/>
			default:
			  return "●"
		}
	  }
	const GetLinks = () => {
		const list = [];
		if(values.email){
		  list.push({
			icon:"HiOutlineMail",
			link: values.email,
		  });
		}
		if(values.phone){
		  list.push({
			icon:"HiPhone",
			link: values.phone,
		  });
		}
		if(values.linkedin){
		  list.push({
			icon:"BsLinkedin",
			link: values.linkedin,
		  });
		}
		if(values.github){
		  list.push({
			icon:"BsGithub",
			link: values.github,
		  });
		}
	
		return(
		  list.map((item,id)=>{
			return(
			  <div className={id%2===0 ? "d-flex aligh-items-start align-items-center bg-2 text-white p-3" : "d-flex aligh-items-start align-items-center bg-3 text-white p-3"} key={id}>
				<p className="m-0"><GetIcon icon={item.icon}/></p><span className="mx-2"></span><p className="m-0">{item.link}</p>
			  </div>
			)
		  })
		)
	
	  }

	return (<div className="dd">
		<div className="cccc">
		<h1>
			Resume
			</h1>
		<Button variant="contained" onClick={back} endIcon={<EditIcon />}>
  			Edit
		</Button>
		</div>

	  <div className="container d-flex justify-content-center p-4">

        <div className="row pdf bg-light" id="divToPrint" size="A4">

          <div className="d-flex align-items-center justify-content-center col-md-5 bg-1 p-0 py-2">
            <div>

              <Stack className="text-center">
                <span className="font-bold m-0 firstname">{values.firstname}</span>
                <span className="font-thin m-0">{values.lastname}</span>
                <p>{values.desc}</p>
                  <p><HiLocationMarker size={20}/> {values.website}</p>
                
              </Stack>
              <br></br>
              <GetLinks/>

              <br></br>
              <Stack className="p-3">
                <h4 className="title">Skills</h4>
                <div className="d-flex flex-wrap">
                {
                  skills.map((items, id) => {
                    return (
                      <p className="technology rounded" key={id}>{items}</p>
                    )
                  })
                }
                </div>
              </Stack>
            </div>

          </div>
          <div className="d-flex align-items-center col-md-7 p-0 py-4" style={{textAlign:"left"}}>
            <div>

              <div className="px-4" >
                <h4 className="title">Experience</h4>
                {
                  values.institute1 ?
                    (
                      <div className="d-flex justify-content-start py-1" >
                        <HiOfficeBuilding size={30}/>
                        <div className="px-3">
                          <h4>{values.position1}</h4>
                          <p className="m-0">{values.institute1} • {values.duration1} </p>
                          <p>{values.experienceDescription1}</p>
                        </div>
                      </div>
                    )
					: null
                }
                {
                  values.institute2 ?
                    (
                      <div className="d-flex justify-content-start py-1" >
                        <HiOfficeBuilding size={30}/>
                        <div className="px-3">
                          <h4>{values.position2}</h4>
                          <p className="m-0">{values.institute2} • {values.duration2} </p>
                          <p>{values.experienceDescription2}</p>
                        </div>
                      </div>
                    )
					: null
                }
                
                <hr></hr>
              </div>

              <div className="px-4">
                <h4 className="title">Education</h4>
                {
                  values.college ?
				  (
                      <div className="d-flex justify-content-start py-1">
                        <GiGraduateCap size={40}/>
                        <div className="px-3">
                          <h4>{values.college}</h4>
                          <p className="m-0">{values.qualification1}</p>
                          <p>{values.fromyear1} - {values.toyear1} 
						  </p>
						  <p>
						  Description: {values.description1}</p>
                        </div>
                      </div>
                    ) : null
                }
                
                
              </div>
            </div>

          </div>

        </div>

      </div>
		</div>);
}

VIewResume.propTypes = {
	values: PropTypes.objectOf(PropTypes.string),
	handleChange: PropTypes.func,
	prevStep: PropTypes.func,
};
export default VIewResume;
