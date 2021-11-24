import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import ProgramCards from '../ProgramCards/ProgramCards';
const programs = [
    {
        id: '1243D',
        name: 'CILT International Certificate in Logistics and Transport',
        type: 'Professional Qualification Program',
        duration: '6',
        seats: '24',
        date: '20 Dec, 2021',
        fee: '20,000',
        deadline: '10 Dec, 2021',
        img: 'https://i.ibb.co/3Ndp0C3/thumbnail1.png',
    },
    {
        id: '1243E',
        name: 'Incoterms® 2020',
        type: 'Professional Qualification Program',
        duration: '6',
        seats: '24',
        date: '20 Dec, 2021',
        fee: '65,000',
        deadline: '10 Dec, 2021',
        img: 'https://i.ibb.co/dc32r26/thumbnail2.png',
    },
    {
        id: '1243F',
        name: 'CILT International Certificate in Logistics and Transport',
        type: 'Professional Qualification Program',
        duration: '6',
        seats: '24',
        date: '20 Dec, 2021',
        fee: '20,000',
        deadline: '10 Dec, 2021',
        img: 'https://i.ibb.co/3Ndp0C3/thumbnail1.png',
    },
]

const Programs = () => {
    return (
        <Container>
            <div>
                <h1 className='font-heading' style={{ fontWeight: '700' }} >Get the Professional <br />
                    Qualifications you are <br />
                    looking for
                </h1>
                <div className='d-flex justify-content-between align-items-end'>
                    <p style={{ width: '550px' }}>Interport Corporate Academy is also accredited by the Chartered Institute of Logistics and Transport (CILT), International (UK) to provide the globally recognized CILT International Diploma and Certificate courses in Logistics and Transport in Bangladesh.</p>
                    <div >
                        <button className='primary-btn-interport'> View All Qualifications</button>
                    </div>
                </div>
                <div className='my-5'>

                    <Row xs={1} md={3} className="g-4">
                        {
                            programs.map(pg =>

                                <ProgramCards
                                    key={pg.id}
                                    program={pg}
                                ></ProgramCards>
                            )
                        }
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default Programs;

// https://i.ibb.co/3Ndp0C3/thumbnail1.png
// https://i.ibb.co/dc32r26/thumbnail2.png