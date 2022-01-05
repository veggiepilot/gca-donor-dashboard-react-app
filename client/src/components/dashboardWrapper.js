import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DashboardWrapper = () => {
  return (
    <Container lg={12}>
              <Row>
        <Col sm={2}>
        </Col>

        <Col sm={10}>Center Display</Col>
      </Row>
    </Container>
  );
};

export default DashboardWrapper;