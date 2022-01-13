import { Stack, Form, Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="d-flex flex-column justify-content-start align-content-start p-3 w-25 ">
      <h1 className="py-2">GAC Dashboard</h1>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search..." />
          <Button variant="primary">Find</Button>
          <div className="vr" />
        </Stack>
      </Container>
  );
};
export default Header;


