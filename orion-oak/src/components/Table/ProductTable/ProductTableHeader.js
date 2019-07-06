import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

export default class ProductTableHeader extends Component {
    render() {
        const headingList = ['Image', 'Product Name', 'Price', 'Description', 'Edit','Delete']
        return   <thead>
          <tr>
          {headingList.map((a, index) => <th key={index}>{a}</th>)}
          </tr>
        </thead>
       
    
        
        
    }
}

