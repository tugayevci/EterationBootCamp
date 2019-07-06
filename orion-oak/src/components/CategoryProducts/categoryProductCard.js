import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import './style.css';
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
export default class categoryProductCard extends Component {
    render() {

        const cookies = new Cookies();

        function handleClick(e) {
            var productsList = [];
            
            console.log(e);
            if (cookies.get("products") == null) {
                console.log("Cookie null");
                productsList.push(e);
                cookies.set("products", productsList, { path: '/' });
                console.log(cookies.get("products"));
            } else {
                productsList = cookies.get("products");
                productsList.push(e);

                cookies.set("products", productsList, { path: '/' });

                console.log(cookies.get("products"));
            }
            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Product Added to Cart',
                showConfirmButton: false,
                timer: 1500
              })
        }


        return (
            
            <div className="col-md-3">
        		<div className="menu-entry-custom">
                        <center><img className="img" src={this.props.ImgPath}></img></center> 
    					<div className="text text-center pt-4">
    						<h3><a href={`/products/${this.props.id}`}>{this.props.title}</a></h3>
    					
                            <p><span>{this.props.description}</span></p>
                            

    						<p className="price"><span>${this.props.price}</span></p>
                            
    						<Button className="btn" onClick={()=> {handleClick(this.props.item)}}>Add To Cart</Button>
    					</div>
    				</div>
        	</div>
        )
    }
}
