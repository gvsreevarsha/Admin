import React from 'react';
import {Container,Row,Col,Card} from 'reactstrap';
import {Form,Button} from 'react-bootstrap';

class Settings extends React.Component{
	render(){
		return(
			<Container fluid>
				<Row style={{backgroundColor:"blue",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
						<div>Change Details</div>
					</Col>
				</Row>
				<Row style={{backgroundColor:"white"}}>
					<Col>
          				<form>
                            <Row>
                                <Col lg="2"></Col>
                                <Col lg="8">
                                    <Row>&nbsp;</Row>
                                    <Form.Group as={Row} controlId="Employee ID">
                                        <Form.Label column lg="4">
                                            Employee ID:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" defaultValue="10110" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="First Name">
                                        <Form.Label column lg="4">
                                            First Name:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" defaultValue="Kishor" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Last Name">
                                        <Form.Label column lg="4">
                                            Last Name:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" defaultValue="Buddha" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Email">
                                        <Form.Label column lg="4">
                                            Email:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="email" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Phone">
                                        <Form.Label column lg="4">
                                            Phone:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Campus">
                                        <Form.Label column lg="4">
                                            Campus:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control as="select">
                                                <option>Bengaluru</option>
                                                <option>Vizag</option>
                                                <option>Hyderabad</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Institution">
                                        <Form.Label column lg="4">
                                            Institution:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" defaultValue="Gitam School Of Technology" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Department">
                                        <Form.Label column lg="4">
                                            Department:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control as="select">
                                                 <option>T&P</option>
                                                <option>FC</option>
                                                <option>Staff</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Image">
                                        <Form.Label column lg="4">
                                            Image:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="file" />
                                        </Col>
                                    </Form.Group>
                                    <Row>
                                        <Col align="center"><Button variant="primary" type="submit">Submit</Button></Col>
                                    </Row>
                                    <Row>&nbsp;</Row>
                                </Col>
                                <Col lg="2"></Col>
                            </Row>
          				</form>
                    </Col>
            	</Row>
                <Row style={{backgroundColor:"blue",color:"white"}}>
                    <Col xs="12" className="p-2" align="center">
                        <div>Change Details</div>
                    </Col>
                </Row>
                <Row style={{backgroundColor:"white"}}>
                    <Col>
                        <form>
                            <Row>
                                <Col lg="2"></Col>
                                <Col lg="8">
                                    <Row>&nbsp;</Row>
                                    <Form.Group as={Row} controlId="Old Password">
                                        <Form.Label column lg="4">
                                            Old Password:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="password" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="New Password">
                                        <Form.Label column lg="4">
                                            New Password:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="password" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Confirm Password">
                                        <Form.Label column lg="4">
                                            Confirm Password:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="password" />
                                        </Col>
                                    </Form.Group>
                                     <Row>
                                        <Col align="center"><Button variant="primary" type="submit">Submit</Button></Col>
                                    </Row>
                                    <Row>&nbsp;</Row>
                                </Col>
                                <Col lg="2"></Col>
                            </Row>
                        </form>
                        <Row>&nbsp;</Row>
                    </Col>
                </Row>
                <Row>&nbsp;</Row>
                <Row>&nbsp;</Row>
			</Container>
		);
	}
}
export default Settings;