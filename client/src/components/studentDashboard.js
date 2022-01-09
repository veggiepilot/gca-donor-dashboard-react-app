import {
  Form,
  Table,
  Button,
  Row,
  Card,
  Col,
  Tab,
  Tabs,
} from "react-bootstrap";

const StudentDashboard = () => {
  return (
    <>
      <Tabs defaultActiveKey="home" id="tab" className="mb-3 userTabs">
        <Tab eventKey="home" title="Notes">
          <Row>
            <Col sm={5}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="Form.ControlTextarea1 resize: none"
                >
                  <Form.Label>
                    <h1>Notes</h1>
                  </Form.Label>
                  <Form.Control as="textarea" rows={10} />
                </Form.Group>
              </Form>
              <Button variant="light">Button white</Button>
            </Col>
            <Col>
              <div>
                <Row md={1} className="g-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                      <Card>
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

export default StudentDashboard;
