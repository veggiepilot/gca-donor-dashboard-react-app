import { Stack, Form, Button,Row,Col,Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Row className="bg-light bg-gradient d-flex justify-content-end align-content-center fixed-top w-25 m-4 p-4">
        <Col>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search..." />
          <Button variant="primary">Find</Button>
          <div className="vr" />
        </Stack>
        </Col>
      </Row>
      </Container>
  );
};
export default Header;


