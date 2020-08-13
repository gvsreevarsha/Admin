import React from 'react'
import {Route,Link}from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';

export default function Navbar() {

    const style = {
        btn:{
           
        }
    }
    return (
        <Route>
            <Container>
			<span className="formtext"></span>
      <div class="mb-3" align="center">
      <h1>Uploads</h1>
	  </div>
        <Link to="/users" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>Users</div>
					</Col>
				</Row></Link><br></br>
        <Link to="/personaldetails" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>Personal details</div>
					</Col>
				</Row></Link><br></br>
                <Link to="/academicdetails" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>Academic details</div>
					</Col>
				</Row></Link><br></br>
                <Link to="/ari" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>ARI</div>
					</Col>
				</Row></Link><br></br>
                <Link to="/areamcat" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>ARE AMCAT</div>
					</Col>
				</Row></Link><br></br>
                <Link to="/arecocubes" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>ARE CoCubes</div>
					</Col>
				</Row></Link><br></br>
                <Link to="/cdt" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div> CDT</div>
					</Col>
				</Row></Link><br></br>
                <Link to="/ita" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div> ITA</div>
					</Col>
				</Row></Link><br></br>
                <Link to="/companydetails" ><Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>Company details</div>
					</Col>
				</Row></Link><br></br>
            </Container>  
        </Route>
    )
}
