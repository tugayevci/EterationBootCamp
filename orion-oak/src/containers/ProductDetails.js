import React, { Component } from 'react'
import ProductDetailscom from '../components/PorductDetails/ProductDetails'

export default class ProductDetails extends Component {
    render() {
        return (
            <div>
                <ProductDetailscom id={this.props.match.params.Id}/>
                
            </div>
        )
    }
}
