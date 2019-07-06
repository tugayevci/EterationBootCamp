import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

export default class CategoryTableHeader extends Component {
    render() {
        const headingList = ['Category Name', 'Category Description','Action']
        return  (
        <thead>
          <tr>
          {headingList.map((a, index) => <th key={index}>{a}</th>)}
          </tr>
        </thead>
        )
      
    }
}
