import React,{Component} from 'react';
import {Card, CardColumns,Button,Table}from "react-bootstrap";
import { render } from "react-dom";
import {NavItem,Navbar,NavLink} from 'reactstrap';
import '../App';
import { Link } from 'react-router-dom';
class HomeCards extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Card>
                        <Card.Body>
                            <Card.Title>Eligible</Card.Title>
                            <Card.Text>
                                &nbsp;
                                <p align="right">420</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3">
                            <Card>
                            <Card.Body>
                            <Card.Title>Placed</Card.Title>
                            <Card.Text>
                                &nbsp;
                                <p align="right">350</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3">
                        <Card>
                        <Card.Body>
                            <Card.Title>Not Placed</Card.Title>
                            <Card.Text>
                                &nbsp;
                                <p align="right">70</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3">
                            <Card>
                            <Card.Body>
                            <Card.Title>Total Drives</Card.Title>
                            <Card.Text>
                                &nbsp;
                                <p align="right">50</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                &nbsp;
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Card>
                        <Card.Body>
                            <Card.Title>Highest Package</Card.Title>
                            <Card.Text>
                               &nbsp;
                               <p align="right">50LPA</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3">
                            <Card>
                            <Card.Body>
                            <Card.Title>Average Package</Card.Title>
                            <Card.Text>
                                &nbsp;
                                <p align="right">15LPA</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3">
                        <Card>
                        <Card.Body>
                            <Card.Title>Least Package</Card.Title>
                            <Card.Text>
                               &nbsp;
                               <p align="right">4LPA</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3">
                            <Card>
                            <Card.Body>
                            <Card.Title>Total Number of Offers</Card.Title>
                            <Card.Text>
                                &nbsp;
                                <p align="right">330</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                &nbsp;
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6'>
                        <Card>
                            <Card.Body>
                                <div className="row">
                                <div className='col-9'>
                                    <Card.Title>Notice Board-Training</Card.Title>
                                </div>
                               <NavLink tag={Link} to={"/TrainingBoardEdit"}>
                               <Button>Edit</Button>
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
                    <div className='col-12 col-sm-6 col-md-6'>
                        <Card>
                        <Card.Body>
                                <div className="row">
                                <div className='col-9'>
                                    <Card.Title>Notice Board-Placements</Card.Title>
                                </div>
                                <NavLink tag={Link} to={"/PlacementEditBoard"}>
                                    <Button>Edit</Button>
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