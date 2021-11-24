import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {

    return (
        <div>
            <Container  >
                <div className='banner d-flex align-items-center' >
                    <div className='text-white ps-5'>
                        <p>Professional Qualification Course</p>
                        <h3 className='fs-1'>
                            CILT International <br />
                            Certificate in Logistics <br />
                            and Transport
                        </h3>
                        <div className='pt-2'>
                            <p className='mt-4'><b>Registration Deadline:</b> 10 October, 2021</p>
                            <p><b>Course Fee:</b> Tk. 20,000</p>
                        </div>
                        <button className='enroll-btn'>Enroll Now</button>
                        <button className='learn-btn'>Learn More</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;