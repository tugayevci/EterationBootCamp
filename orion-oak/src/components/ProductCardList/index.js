import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import ProductCard from './productCard'
import { API_PRODUCTS } from '../../paths';


export default class ProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            count: 0,
            allProducts: [],
            productList: [],            
            errorMessage: undefined
        }
    }

    componentDidMount() {
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
    render() {
        return (
            <div className="row">
                    {this.state.productList.map((item, index) =>
                    <ProductCard item={item} id={item.productId}  ImgPath={item.productImagePath} title={item.productName} description={item.productDescription} price={item.productPrice}/>
                    )}
            </div>            
        )
    }
}
