import React, { Component } from 'react'
import ProductAdd from '../components/Table/ProductTable/ProductAdd';
import ProductListTable from '../components/Table/ProductTable';
import CategoryListTable from '../components/Table/CategoryTable';
import CategoryAdd from '../components/Table/CategoryTable/CategoryAdd';

export default class AdminPanel extends Component {
    render() {
        return (
            <div className="container">
                <ProductListTable/>
                <CategoryAdd/>
                <CategoryListTable/>
            </div>
        )
    }
}
