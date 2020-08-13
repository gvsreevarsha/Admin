import React,{Component} from 'react';
import {Card,Table} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus,faPencilAlt,faMinusCircle,faTrash} from "@fortawesome/free-solid-svg-icons";
import {NavbarBrand,NavbarToggler,Collapse,Nav ,Jumbotron , Modal ,ModalHeader 
    ,ModalBody, Form, FormGroup, Label, Input,Button} from 'reactstrap';
import { Link } from 'react-router-dom';

class PlacementBoardEdit extends Component{
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
              <div className="inline">
                 <Card.Title><h3 align="center">Notice Board-Placements
                        <Link onClick={this.toggleModal}>
                            <FontAwesomeIcon icon={faPlus}  size="xs" />
                        </Link>
                        </h3>
                       </Card.Title>        
                 </div>

                      &nbsp;
                       <div>
                         <Table size='sm'responsive>
                         <thead>
                                             <tr>
                                                 <th>S.No</th>
                                                 <th>Name of the Company</th>
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
                                                 <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                             </tr>
                                             <tr>
                                                 <td>1</td>
                                                 <td>GCGC</td>
                                                 <td>2020-07-23</td>
                                                 <td>$1</td>
                                                 <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                             </tr>
                                             <tr>
                                                 <td>1</td>
                                                 <td>GCGC</td>
                                                 <td>2020-07-23</td>
                                                 <td>$1</td>
                                                 <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                             </tr>
                                             <tr>
                                                 <td>1</td>
                                                 <td>GCGC</td>
                                                 <td>2020-07-23</td>
                                                 <td>$1</td>
                                                 <FontAwesomeIcon icon={faPencilAlt}  className="ml-2" />
                                                 <FontAwesomeIcon icon={faTrash} className='ml-2'/>
                                             </tr>
                                             
                                         </tbody>         
                         </Table>
                     </div>
                 </Card.Body>
             </Card> 
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add Placement Event</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        
                        <FormGroup>
                            <Label htmlfor="company">
                                Name Of The Company
                            </Label>
                            <Input type="text" id="company" name="company" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="date"> From </Label>
                            <Input type="date" id="date" name="date" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="CTC"> CTC </Label>
                            <Input type="text" id="ctc" name="ctc" />
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
export default PlacementBoardEdit;