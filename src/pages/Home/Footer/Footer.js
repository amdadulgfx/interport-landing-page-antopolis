import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import bsaa from '../../../images/BSAA.png'
import fb from '../../../images/fb.png'
import insta from '../../../images/001-instagram.png'
import twitter from '../../../images/twitter.png'
import location from '../../../images/location.png'
import phone from '../../../images/phone.png'
import envelop from '../../../images/envelop.png'
const Footer = () => {
    return (
        <div className='footer py-5' style={{ color: '#BBC9ED' }}>
            <div className=' py-5'>
                <Container>
                    <Row md={2} xs={1}>
                        <Col>
                            <Row md={2} xs={1}>
                                <Col>
                                    <img src={bsaa} alt="" />
                                    <div className='d-flex justify-content-between my-5' style={{ width: '160px' }}>
                                        <img src={fb} alt="" />
                                        <img src={insta} alt="" />
                                        <img src={twitter} alt="" />
                                    </div>
                                    <div >
                                        <a href="#about">About Us</a>
                                        <a href="#members">Our Members</a>
                                        <a href="#report">Berthing Report</a>
                                        <a href="#careers">Careers</a>
                                        <a href="#links">Links</a>
                                        <a href="#contact">Contact Us</a>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <p style={{ color: 'white' }}><b>Chattogram</b></p>
                                        <div className='d-flex'> <div>
                                            <img src={location} alt="" />
                                        </div>
                                            <p className='ms-2'> Chamber House (2nd floor),
                                                38 Agrabad C/A, Chattogram-4100, Bangladesh</p>
                                        </div>
                                        <div className='d-flex'> <div>
                                            <img src={phone} alt="" />
                                        </div>
                                            <p className='ms-2'>031-723393</p>
                                        </div>
                                        <div className='d-flex'> <div>
                                            <img src={envelop} alt="" />
                                        </div>
                                            <p className='ms-2'>bsaa@bbts.net</p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p style={{ color: 'white' }}><b>Khulna</b></p>
                                        <div className='d-flex'> <div>
                                            <img src={location} alt="" />
                                        </div>
                                            <p className='ms-2'> Ansari Complex (2nd Floor)
                                                160, Sher-e-Bangla Road, Khulna, Bangladesh</p>
                                        </div>
                                        <div className='d-flex'> <div>
                                            <img src={phone} alt="" />
                                        </div>
                                            <p className='ms-2'>041-720886</p>
                                        </div>
                                        <div className='d-flex'> <div>
                                            <img src={envelop} alt="" />
                                        </div>
                                            <p className='ms-2'>bsaa.khulna@gmail.com</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;