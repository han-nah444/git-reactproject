import { Container, Col, Row } from "reactstrap";


const ContactPage = () => {
    return (
        <Container>

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        123 Magical Dr.
                        <br />
                        San Antonio, TX 78230
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-206-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> shopdonuts@donuts.co
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;

