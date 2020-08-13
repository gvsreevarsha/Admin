import React ,{Component} from 'react'
import {Card,Table} from 'react-bootstrap'
import Footer from './Footer'


class PlacementTrainingmore extends Component{
    render(){
        return(
            <div>
           <Card>
             <Card.Body>
                <Card.Title><h3 align="center">Notice Board-Placements</h3></Card.Title>        
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
                </Card.Body>
            </Card> 
        </div>
        );
    }
}
export default PlacementTrainingmore;