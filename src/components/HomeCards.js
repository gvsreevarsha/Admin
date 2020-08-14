import React,{Component} from 'react';
import {Card, CardColumns,Button,Table}from "react-bootstrap";
import { render } from "react-dom";
import {NavItem,Navbar,NavLink} from 'reactstrap';
import '../App';
import { Link } from 'react-router-dom';
class HomeCards extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Eligible</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>420</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Placed</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>350</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Not Placed</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>70</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Total Drives</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>50</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Highest Package</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>50 LPA</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Average Package</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>15LPA</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Least Package</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>4LPA</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xs-12 col-lg-3 col-md-6 p-3">
                        <Card>
                        <Card.Body className="p-3">
                            <Card.Text style={{fontSize:"12px",fontFamily: "Segoe UI"}}>Total Number Of Offers</Card.Text>
                            <Card.Text>
                                <p align="right" style={{fontSize:"14px",fontFamily: "Segoe UI"}}>330</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                &nbsp;
                <div className='row'>
                    <div className='col-xs-12 col-lg-6 col-md-12 p-2'>
                        <Card>
                            <Card.Body>
                                <div className="row">
                                <div className='col-9'>
                                    <Card.Title class="p-2" style={{fontSize:"20px",fontFamily: "Segoe UI"}}>Notice Board-Training</Card.Title>
                                </div>
                               <NavLink tag={Link} to={"/TrainingBoardEdit"}>
                               <Button style={{backgroundColor:"#2A324B",color:"white",borderColor:"#2A324B"}}>Edit</Button>
                               </NavLink>
                                </div>
                                &nbsp;
                                <div>
                                    <Table size='sm'responsive>
                                        <thead>
                                            <tr>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Name of the Programme</th>
                                                <th>status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2020-07-23</td>
                                                <td>2020-07-26</td>
                                                <td>GCGC</td>
                                                <td>On-Going</td>
                                            </tr>
                                            <tr>
                                                <td>2020-07-23</td>
                                                <td>2020-07-26</td>
                                                <td>GCGC</td>
                                                <td>On-Going</td>
                                            </tr>
                                            <tr>
                                                <td>2020-07-23</td>
                                                <td>2020-07-26</td>
                                                <td>GCGC</td>
                                                <td>On-Going</td>
                                            </tr>
                                            <tr>
                                                <td>2020-07-23</td>
                                                <td>2020-07-26</td>
                                                <td>GCGC</td>
                                                <td>On-Going</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <Card.Text>
                                                <NavLink tag={Link} to={'/trainingdashboardmore'}>More..</NavLink>
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </div>
                    <div className='col-xs-12 col-lg-6 col-md-12 p-2'>
                        <Card>
                        <Card.Body>
                                <div className="row">
                                <div className='col-9'>
                                    <Card.Title class="p-2" style={{fontSize:"20px",fontFamily: "Segoe UI"}}>Notice Board-Placements</Card.Title>
                                </div>
                                <NavLink tag={Link} to={"/PlacementEditBoard"}>
                                    <Button style={{backgroundColor:"#2A324B",color:"white",borderColor:"#2A324B"}}>Edit</Button>
                                </NavLink>
                                </div>
                                &nbsp;
                                <div>
                                    <Table size='sm'responsive>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name of the Programme</th>
                                                <th>Date</th>
                                                <th>CTC</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>GCGC</td>
                                                <td>2020-07-23</td>
                                                <td>$1</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>GCGC</td>
                                                <td>2020-07-23</td>
                                                <td>$1</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>GCGC</td>
                                                <td>2020-07-23</td>
                                                <td>$1</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>GCGC</td>
                                                <td>2020-07-23</td>
                                                <td>$1</td>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                </div>
                                <Card.Text>
                                            <NavLink tag={Link} to={'/placementdashboardmore'}>More..</NavLink>
                            </Card.Text>
                            </Card.Body>
                        </Card> 
                    </div>
                </div>
          </div>
        );
    }
}
export default HomeCards;