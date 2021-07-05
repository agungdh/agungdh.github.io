import {Container, Row, Col, Alert} from 'react-bootstrap';
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const { no } = router.query

    return (
    <div>
      <>
        <Container fluid>
          <Row>
            <Col>
              <p>{no}</p>
            </Col>
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
