import "./studentVeiws.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const StudentVeiws = () => {
  return (
    <Col lg={12} className="mb-3">
      <Container>
        <Tabs defaultActiveKey="home" id="tab" className="mb-3 userTabs">
          <Tab eventKey="home" title="Notes">
            <Row lg={8}>
              <Col sm={6}>
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
                  <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>Previous Notes</Card.Title>
                            <Card.Text>
                              This will hold prior notes. perhaps we could modal these as well. 
                              logic is ready for array of past inputs.
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
          <Tab eventKey="profile" title="Donors"></Tab>
        </Tabs>
      </Container>
    </Col>
  );
};

export default StudentVeiws;
