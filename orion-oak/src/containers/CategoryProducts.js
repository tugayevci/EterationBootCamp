import React, { Component } from 'react'
import CategoryProductTable from '../components/CategoryProducts';

export default class CategoryProducts extends Component {
    render() {
        return (
            <div>
                <CategoryProductTable id={this.props.match.params.Id}/>
            </div>
        )
    }
}
