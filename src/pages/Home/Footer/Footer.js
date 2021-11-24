import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
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
                            <div className='w-75 mx-auto'>
                                <h3 className='font-heading text-white' >Get In Touch</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                                        <Form.Control className='bg-transparent form-border p-3' type="text" placeholder="Your Name" />
                                        <Form.Control className='bg-transparent form-border p-3 my-3' type="email" placeholder="Your Email" />
                                        <Form.Control className='bg-transparent form-border p-3' type="text" placeholder="Subject" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                        <Form.Control className='bg-transparent form-border' placeholder='Your Message' as="textarea" rows={4} />
                                    </Form.Group>
                                    <div className='text-end pt-4' >
                                        <button className='send-btn'>Send Message</button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr />
            <div className='d-flex justify-content-center align-items-center pt-4'>
                <p>© Copyright 2020 - 2021</p> <span className='fs-1 mx-3' style={{ width: '8px', height: '8px', backgroundColor: '#BBC9ED', borderRadius: '4px', marginTop: '-15px' }} > </span>
                <p>All rights reserved by Antopolis</p>
            </div>
        </div>
    );
};

export default Footer;