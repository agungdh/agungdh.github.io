import {Container, Row, Col, Alert} from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <>
        <Container fluid>
          <Row>
            <Col>
              <p>Yay, it's fluid!</p>
            </Col>
            {[
              'primary',
              'secondary',
              'success',
              'danger',
              'warning',
              'info',
              'light',
              'dark',
            ].map((variant, idx) => (
            <Col>
              <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            </Col>
            ))}
          </Row>
        </Container>
      </>
    </div>
  );
}
