import React, { Component } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { API_CATEGORIES } from '../../../paths'


export default class CategoryAdd extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            categoryList: [],
            categoryName: '',
            categoryDescription: '',
            show: false,
        }

    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    addCategory() {

        fetch(API_CATEGORIES, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoryName: this.state.categoryName,
                categoryDescription: this.state.categoryDescription,
            })
        })
    }


    render() {
        return (

            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Add New Category
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form>
                        <Form.Group controlId="formBasicProductName">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control value={this.state.categoryName} type="text" placeholder="Product Name" onChange={(t) => { this.setState({ categoryName: t.target.value }) }} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicProductDescription">
                            <Form.Label>Category Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" value={this.state.categoryDescription} onChange={(t) => { this.setState({ categoryDescription: t.target.value }) }} />
                        </Form.Group>
                    </Form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={() => { this.addCategory(); this.handleClose() }}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>

        )



    }
}
