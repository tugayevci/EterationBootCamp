import React, { Component } from 'react'
import { CarouselItem, Carousel } from 'react-bootstrap'
import bg1 from '../../images/bg_1.jpg'
import bg2 from '../../images/bg_2.jpg'
import bg3 from '../../images/bg_3.jpg'



export default class MainSlider extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
            
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (

            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg1}
                        style={{height:"650px"}}
                    />
                    <Carousel.Caption style={{marginBottom:"10%"}}>
                        <h1>The Best Coffee Testing Experience</h1>
                        <h4>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h4>
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg2}
                        style={{height:"650px"}}

                    />

                    <Carousel.Caption  style={{marginBottom:"10%"}}>
                        <h1>Amazing Taste &amp; Beautiful Place</h1>
                        <h4>A small river named Duden flows by their place and supplies it with the necessary regelialia.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg3}
                        style={{height:"650px"}}

                    />

                    <Carousel.Caption  style={{marginBottom:"10%"}}>
                        <h1> Creamy Hot and Ready to Serve</h1>
                        <h4>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        );
    }
}