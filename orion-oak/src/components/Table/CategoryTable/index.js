import React, { Component } from 'react'
import CategoryTableHeader from './CategoryTableHeader';
import { API_CATEGORIES } from '../../../paths'
import { Table,Button } from 'react-bootstrap';


export default class CategoryListTable extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            categoryList: [],               
        }
    }


    componentDidMount() {
        fetch(API_CATEGORIES, { method: 'GET' })
            .then(r => r.json())
            .then(responseJSON => {
                this.setState({
                    categoryList: responseJSON,
                    loading: false
                })
            }).catch(e => {
                this.setState({
                    errorMessage: e.toString()
                })
            })
    }

    onDelete(categoryId) {
        
        fetch(API_CATEGORIES+'/'+categoryId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: categoryId,
                
            })
        })
    
    }

    render() {


        return <view>
            <Table striped bordered hover variant="dark">
                <CategoryTableHeader />
                <tbody>{
                    this.state.categoryList.map((item, index) => <tr key={index}>

                        <th>{item.categoryName}</th>
                        <th>{item.categoryDescription}</th>
                        <th><Button className="btn-danger"  onClick={() => { this.onDelete(item.categoryId); }}>Delete</Button></th>
                    </tr>)
                }
                </tbody>

            </Table>

        </view>



    }
}
