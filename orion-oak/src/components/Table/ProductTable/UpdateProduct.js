import React, { Component } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { API_PRODUCTS } from '../../../paths'

export default class UpdateProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


        this.state = {
            productList: [],
            productId:this.props.productId,
            productName: '',
            productImagePath: '',
            productPrice: '',
            productDescription: '',
            categoryId: '',
            show: false,
        }

    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
        this.getProduct(this.state.productId)
    }

    getProduct(productId)
    {
        fetch(API_PRODUCTS+'/'+productId, { method: 'GET' })
        .then(r => r.json())
        .then(responseJSON => {
            this.setState({
                productId:responseJSON.productId,
                productName:responseJSON.productName,
                productDescription:responseJSON.productDescription,
                productImagePath:responseJSON.productImagePath,
                productPrice:responseJSON.productPrice,
                categoryId:responseJSON.productCategory.categoryId,

                loading: false
            })
        }).catch(e => {
            this.setState({
                errorMessage: e.toString()
            })
        })
    }
    
    addProduct() {
        
        fetch(API_PRODUCTS, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId:this.state.productId,
                productName: this.state.productName,
                productDescription: this.state.productDescription,
                productImagePath: this.state.productImagePath,
                productPrice: this.state.productPrice,
                productCategory:{categoryId:this.state.categoryId}
            })
        })
    }

    render() {
        return (

            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Edit
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form>
                        <Form.Group controlId="formBasicProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control value={this.state.productName} type="text" placeholder="Product Name" onChange={(t) => { this.setState({ productName: t.target.value }) }} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicProductDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" value={this.state.productDescription} onChange={(t) => { this.setState({ productDescription: t.target.value }) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicProductPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" placeholder="$" min="1" value={this.state.productPrice} onChange={(t) => { this.setState({ productPrice: t.target.value }) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicProductImg">
                            <Form.Label>Product Img</Form.Label>
                            <Form.Control type="text" value={this.state.productImagePath} onChange={(t) => { this.setState({ productImagePath: t.target.value }) }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicProductCategoryId">
                            <Form.Label>Product Category Id</Form.Label>
                            <Form.Control type="text" value={this.state.categoryId} onChange={(t) => { this.setState({ categoryId: t.target.value }) }} />
                        </Form.Group>


                    </Form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
            </Button>
                        <Button variant="primary" onClick={() => { this.addProduct(this.props.productId); this.handleClose() }}>
                            Save Changes
            </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )

    }
}
