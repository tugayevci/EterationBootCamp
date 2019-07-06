import React, { Component } from 'react'
import NavbarCustom from '../components/Navbars';
import MainSlider from '../components/MainSlider';
import ProductTable from '../components/ProductCardList';

export default class Home extends Component {
    render() {
        return (
            <div>
               
                <MainSlider/>
                <br/>
                <ProductTable/>
                
            </div>
        )
    }
}
