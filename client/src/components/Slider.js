import React from 'react';
import { Carousel } from 'react-bootstrap';

import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';

const Slider = () => {
    return (
        <div style={{ margin: '8vh' }}>
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ maxWidth: '1200px'}}
                                    src={first}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ maxWidth: '1200px'}}
                                    src={second}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    style={{ maxWidth: '1200px'}}
                                    src={third}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;