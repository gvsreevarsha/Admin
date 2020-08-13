import React,{Component} from 'react';
import {Card,Table, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavbarBrand,NavbarToggler,Collapse,Nav ,Jumbotron , Modal ,ModalHeader 
    ,ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {faPlus,faPencilAlt,faMinusCircle,faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {NavItem,Navbar,NavLink} from 'reactstrap';
import {Col} from 'react-bootstrap';

class TrainingBoardEdit extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.state={isNavOpen:false};
        this.toggleModal=this.toggleModal.bind(this)
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });

    }
    render(){
        return(
            <div>
            <Card>
              <Card.Body>
              <div className="row">
                  <Col>
                 <Card.Title><h3 align="center">Notice Board-Training
                 
                        <Link onClick={this.toggleModal}>
                            <FontAwesomeIcon icon={faPlus}  size="xs" />
                        </Link>
                        </h3>
                       </Card.Title>        
                       </Col>
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
                                                <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                            </tr>
                                            <tr>
                                                <td>2020-07-23</td>
                                                <td>2020-07-26</td>
                                                <td>GCGC</td>
                                                <td>On-Going</td>
                                                <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                            </tr>
                                            <tr>
                                                <td>2020-07-23</td>
                                                <td>2020-07-26</td>
                                                <td>GCGC</td>
                                                <td>On-Going</td>
                                                <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                            </tr>
                                            <tr>
                                                <td>2020-07-23</td>
                                                <td>2020-07-26</td>
                                                <td>GCGC</td>
                                                <td>On-Going</td>
                                                <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                            </tr>
                                        </tbody>         
                         </Table>
                     </div>
                 </Card.Body>
             </Card> 
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add Training Event</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlfor="username">
                                Year Of Passing
                            </Label>
                            <Input type="text" id="YOP" name="YOP" innerRef={(input)=>this.username=input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="program">
                                Name Of The Program
                            </Label>
                            <Input type="text" id="program" name="program" />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="from-date"> From </Label>
                            <Input type="date" id="from-date" name="from-date" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="to-date"> To </Label>
                            <Input type="date" id="to-date" name="to-date" />
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">
                            Submit
                        </Button> 
                    </Form>
                </ModalBody>
            </Modal>
         </div>

        );
    }
}
export default TrainingBoardEdit;