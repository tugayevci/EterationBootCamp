import React, { Component } from 'react'
import ProductTableHeader from './ProductTableHeader';
import { Table,Button } from 'react-bootstrap';
import { API_PRODUCTS } from '../../../paths'
import UpdateProduct from './UpdateProduct';
import Swal from 'sweetalert2'
import ProductAdd from './ProductAdd';



export default class ProductListTable extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            productList: [],    
            allProducts: [],           
        }
    }
    
    componentDidMount() {
        this.getProducts();
    }

    getProducts()
    {
        fetch(API_PRODUCTS, { method: 'GET' })
        .then(r => r.json())
        .then(responseJSON => {
            this.setState({
                allProducts: responseJSON,
                productList: responseJSON,
                loading: false
            })
        }).catch(e => {
            this.setState({
                errorMessage: e.toString()
            })
        })
    }

    onDelete(productId,productindex) {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {

                fetch(API_PRODUCTS+'/'+productId, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        productId: productId,
                        
                    })
                })
        
                this.setState({
                    productList: this.state.productList.filter((item, index) =>
                        index !== productindex
                    )
                })


              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })       
        
    }


    render() {
        return <view>
            <ProductAdd addProduct={()=>{this.getProducts()}}/>

            <Table striped bordered hover variant="dark">
                <ProductTableHeader />
                <tbody>{
                    this.state.productList.map((item, index) => <tr key={index}>
                        <th><img src={item.productImagePath} alt='img-tablet' width='100' height='100' /></th>
                        {/* <th><img src={require(`../../images/${item.img}.jpg`)} alt='img-tablet' width='100' height='100' /></th> */}
                        <th>{item.productName}</th>
                        <th>{item.productPrice}</th>
                        <th>{item.productDescription}</th>
                        <th><UpdateProduct className="btn-danger" productId={item.productId} >Edit</UpdateProduct></th>

                        <th><Button className="btn-danger"  onClick={() => { this.onDelete(item.productId,index); }}>Delete</Button></th>

                    </tr>)
                }
                </tbody>

            </Table>
        </view>

    }
}
