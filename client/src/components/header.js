import { Stack, Form, Button, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row className="justify-self-end p-2 m-3">
      <Col>
        <h1>GAC dashboard</h1>
        <Stack direction="horizontal" gap={3} className="w-25">
          <Form.Control className="me-auto" placeholder="Search..." />
          <Button variant="light">Find</Button>
          <div className="vr" />
        </Stack>
      </Col>
    </Row>
  );
};

export default Header;
