import {
  Form,
  Table,
  Button,
  Row,
  Card,
  Col,
  Tab,
  Tabs,
  Container,
  Stack
} from "react-bootstrap";

const StudentTabs = () => {
  return (
 <>
    <Container className="d-flex flex-column justify-content-start align-content-start p-3 w-25 ">
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search..." />
          <Button variant="primary">Find</Button>
          <div className="vr" />
        </Stack>
    </Container>
      <Tabs defaultActiveKey="home" id="tab" className="mt-5 userTabs ">
        <Tab eventKey="home" title="Notes">
          <Row>
            <Col sm={5}>
              <Form>
                <Form.Group
                  className="mb-3 text-dark"
                  controlId="Form.ControlTextarea1 resize: none"
                >
                  <Form.Label>
                    <h1  className="mb-3text-dark">Notes</h1>
                  </Form.Label>
                  <Form.Control as="textarea" rows={10} />
                </Form.Group>
              </Form>
              <Button variant="light">Submit</Button>
            </Col>
            <Col>
              <div>
                <Row md={1} className="g-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                   <Col className=" d-flex flex-row justify-content-center align-content-center w-50 ">
                   <Card className="text-center d-flex flex-row justify-content-center align-content-center content-box">
                        <Card.Body>
                          <Card.Title>Previous Notes</Card.Title>
                          <Card.Text>
                            This will hold prior notes. perhaps we could modal
                            these as well. logic is ready for array of past
                            inputs.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="profile" title="Donors">
          <Card>
            <Card.Body>
              <Card.Title>Donors Data</Card.Title>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rebecca</td>
                    <td>Sundquist </td>
                    <td>@Sund</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Adam</td>
                    <td>Olsey</td>
                    <td>@Olse</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>sarah</td>
                    <td>Maskill</td>
                    <td>@Maski</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Johannes</td>
                    <td>Chitura</td>
                    <td>@Chitu</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>5</td>
                    <td colSpan="2">Johannes Chitura</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs> 
    </>
  );
};

export default StudentTabs;
