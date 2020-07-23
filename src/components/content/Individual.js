import React from 'react';
import 'D:/varsha/admin/src/App.css';
import Collapsible from 'react-collapsible';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar,NavbarBrand } from 'reactstrap';
import { Card,CardTitle, CardSubtitle,CardText,Container,Row,Col,Alert,Collapse,Table } from 'reactstrap';
import {Button,Modal} from 'react-bootstrap';
import {RadarExample} from './Radar';
import {RadarExample2} from './Radar2';
import {DoughnutExample} from './Doughnut';
import {BarExample} from './SimpleBarchart';
import {BarChart} from './Barchart';  
import ReactSpeedometer from "react-d3-speedometer";
import Tenth from './Tenth';

class Individual extends React.Component {
  constructor(){
    super()
    this.state={
        show:false
    }
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  render(){
  return (
    <div className="App">
        <div class="container-fluid">
            <br></br>
            <Row>
              <Tenth />
              <Col md="4">
                <Card color="warning" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">Inter Percentage</CardSubtitle>
                </Card>
              </Col>
              <Col md="4">
                <Card color="danger" className="Rounded p-3">
                  <CardTitle align="left">90%</CardTitle>
                  <CardSubtitle align="left">B Tech Percentage</CardSubtitle>
                </Card>
              </Col>
            </Row>
            <br></br>
          <Collapsible trigger="More Info">
          <br></br>
          <Row>
            <Col md="4">
              <Alert color="success" className="Rounded p-3">
                <CardTitle align="left">CSE</CardTitle>
                <CardSubtitle align="left">Branch</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="warning" className="Rounded p-3">
                <CardTitle align="left">A</CardTitle>
                <CardSubtitle align="left">Pass Category</CardSubtitle>
              </Alert>
            </Col>
            <Col md="4">
              <Alert color="danger" className="Rounded p-3">
                <CardTitle align="left">B</CardTitle>
                <CardSubtitle align="left">Section</CardSubtitle>
              </Alert>
            </Col>
          </Row>
          </Collapsible>
        </div>
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col md="6" className="pr-2 pt-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Job Fitment</CardSubtitle>
                <hr></hr>
                <br></br>
                <ReactSpeedometer responsive
                  maxValue={100}
                  value={75}
                  segments={6}
                />
                <CardText>
                Description : You are 75 % suitable
                to the industry with your current performance
                in all the tests conducted by T&P
                </CardText>
              </Card>
            </Col>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Current Job Suitability</CardSubtitle>
                <hr></hr>
                <div class="container-fluid">
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Analyst
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      CustomerSales
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Plant Engineer
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      RRD Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Network Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Operations Engineer
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Developer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Engineer
                    </Col>
                    <Col lg="4" md="6" sm="12">
                      <DoughnutExample/>
                      Software Tester
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col sm="12">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">ARI</CardSubtitle>
                <hr></hr>
                <BarChart/>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>
        <div class="container-fluid">
          <Row>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Cocubes Analysis</CardSubtitle>
                <hr></hr>
                  <RadarExample/>
                  <br></br>
                  <Button onClick={()=>{this.handleModal()}}>Edit
                  <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                    <Modal.Header closeButton>Edit Cocubes Marks</Modal.Header>
                    <Modal.Body>
                      <form>
                        <Table className="cocubesedit" responsive>
                        <thead>
                          <tr>
                            <th>English</th>
                            <th>Quants</th>
                            <th>Domain</th>
                            <th>Analytical</th>
                            <th>CF</th>
                            <th>Coding</th>
                            <th>WET</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                              <input type="text" name="English" style={{width:"50px"}} />
                            </td>
                            <td>
                              <input type="text" name="Quants" style={{width:"50px"}} />
                            </td>
                            <td>
                              <input type="text" name="Domain" style={{width:"50px"}}/>
                            </td>
                            <td>
                              <input type="text" name="Analytical" style={{width:"50px"}}/>
                            </td>
                            <td>
                              <input type="text" name="CF" style={{width:"50px"}} />
                            </td>
                            <td>
                              <input type="text" name="Coding" style={{width:"50px"}}/>
                            </td>
                            <td>
                              <input type="text" name="WET" style={{width:"50px"}} />
                            </td>
                          </tr>
                        </tbody>
                        </Table>
                      </form>
                    </Modal.Body>
                  </Modal>
                  </Button>
              </Card>
            </Col>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Amcat Analysis</CardSubtitle>
                <hr></hr>
                  <RadarExample2/>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>

        <div class="container-fluid">
          <Row>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Cocubes Analysis</CardSubtitle>
                <hr></hr>
                  
              </Card>
            </Col>
            <Col md="6" className="p-2">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">Amcat Analysis</CardSubtitle>
                <hr></hr>
                  <RadarExample2/>
              </Card>
            </Col>
          </Row>
        </div>


        <div class="container-fluid">
          <Row>
            <Col md="12">
              <Card className="Rounded p-3">
                <CardSubtitle align="left">ITA</CardSubtitle>
                <hr></hr>
                <BarExample/>
              </Card>
            </Col>
          </Row>
        </div>  
        <br></br>
        <h6>Placements Analysis</h6>
        <Table className="placements" striped bordered responsive>
            <tbody>
              <tr>
                <td md="6">
                  Total Number of Companies:50
                </td>
                <td md="6">
                  Number of written test cleared:0
                </td>
              </tr>
              <tr>
                <td md="6">
                  Number of Companies Attended:0
                </td>
                <td md="6">
                  Number of GD's cleared:0
                </td>
              </tr>
              <tr>
                <td md="6">
                  Number of Companies Eligible:50
                </td>
                <td md="6">
                  Number of technical test cleared:0
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  Number of Offer Letters:0
                </td>
              </tr>
            </tbody>
        </Table>
        <br></br>
        <h6>Placements Analysis</h6>
      <Table className="placementanalysis" responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Company Logo</th>
            <th>Company Name</th>
            <th>Attendance</th>
            <th>Written Test</th>
            <th>GroupDiscussion</th>
            <th>Technical Test</th>
            <th>Personal Interview</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
}

export default Individual;