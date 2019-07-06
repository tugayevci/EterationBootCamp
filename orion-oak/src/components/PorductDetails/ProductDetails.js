import React, { Component } from "react";
import "./style.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { API_PRODUCTS } from '../../paths';
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import ProductCard from "../ProductCardList/productCard";
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      product:''
      
    };
  }
  componentDidMount() {
    fetch(API_PRODUCTS + '/' + this.props.id)
      .then(r => r.json())
      .then(responseJSON => {
        console.log(responseJSON);
        this.setState({
          product:responseJSON
         
        });
      })
      .catch(e => {
        this.setState({
          errorMessage: e.toString()
        });
      });
  }
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

            cookies.set("products", productsList,{ path: '/' });

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
      <div className="BgFull">
        <Container>
          <Row className="standart-padding">
            <Col>
                <img
                className="img-fluid"
                src={this.state.product.productImagePath}
              />  
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h3 className="header">{this.state.product.productName}</h3>
              <p className="price"> {this.state.product.productPrice} ₺ </p>
              <p>{this.state.product.productDescription}</p>
              <Button className="btn" onClick={()=> {handleClick(this.state.product)}}>Add To Cart</Button>


            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}