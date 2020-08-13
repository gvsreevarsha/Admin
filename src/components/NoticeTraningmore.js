import React ,{Component} from 'react'
import {Card,Table} from 'react-bootstrap'
import Footer from './Footer'


class NoticeTraningmore extends Component{
    render(){
        return(
            <div>
                <Card >
                        <Card.Body>
                            <Card.Title><h3 align='center'>Notice Board-Training</h3></Card.Title>
                            &nbsp;
                            <Card.Text>
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
                            </Card.Text>
                        </Card.Body>
                        </Card>
            </div>
        );
    }
}
export default NoticeTraningmore;