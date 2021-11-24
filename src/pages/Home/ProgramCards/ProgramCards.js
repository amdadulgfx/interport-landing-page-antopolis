import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { dateIcon, durationIcon, seatIcon } from '../../../images/icons';

const cardBorder = {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
}
const ProgramCards = ({ program }) => {
    const { img, name, type, duration, seats, fee, date, deadline } = program;
    return (
        <Col>

            <div className='mb-5'>
                <Card style={{ borderRadius: '10px' }} >
                    <Card.Img variant="top" src={img} />
                    <div style={{ marginTop: '-200px' }} className=' text-white  px-2'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p style={{ lineHeight: '20px', marginTop: '15px' }}><b>Deadline:</b> <br />
                                {deadline}
                            </p>
                            <button className='reg-btn'>Open For Registration</button>
                        </div>

                    </div>

                    <Card.Body style={{ marginTop: '120px' }}>
                        <p>{type}</p>
                        <Card.Title style={{ height: '40px' }}> <b>{name}</b> </Card.Title>
                        <Card.Text>
                            <div className=' d-flex justify-content-between align-items-center py-3'>
                                <p>{durationIcon} <br /> {duration} Months</p>
                                <p>{seatIcon} <br /> {seats}</p>
                                <p>{dateIcon} <br /> {date}</p>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='bg-white d-flex justify-content-between align-items-center' style={cardBorder}>
                        <p>
                            <b>Course Fee</b> <br />
                            Tk. {fee}
                        </p>
                        <button className='primary-btn-interport'>Enroll Now</button>
                    </Card.Footer>
                </Card>
            </div>
        </Col>
    );
};

export default ProgramCards;