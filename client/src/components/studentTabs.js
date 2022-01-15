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
  Stack,
} from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useQuery } from '@apollo/client'
import { QUERY_STUDENTS } from "../utils/queries";

const StudentTabs = () => {
  const { error, data } = useQuery(QUERY_STUDENTS);

  const students = data?.students || [];
  if (error) {return console.log(error) };

  return (
    <>
      <Container className="d-flex flex-column justify-content-start align-content-start p-3 w-25 fixed-top">
        <Stack direction="horizontal">
          <Form.Control className="me-auto" placeholder="Search..." />
          <div className="vr" />
          <Button variant="light">Find</Button>
        </Stack>
      </Container>

      <Tabs
        defaultActiveKey="home"
        id="tab"
        className="userTabs d-flex flex-row justify-content-center align-content-center"
      >
        <Tab eventKey="home" title="Students">
        <Container className=" d-flex flex-row justify-content-center align-content-center">
        <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
          <Card.Header>Student List</Card.Header>
          
          <Card.Body>
            <Card.Title>
              <Icon icon="ph:student-fill" width="50" height="50" />
            </Card.Title>
      
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Funding Needed</th>
                </tr>
              </thead>
              {students && students.map((student) =>(
              <tbody key={student._id}>
                <tr>
                  <td>{student._id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.fundingNeeded}</td>
                </tr>
              </tbody>
              ))}
            </Table>
          </Card.Body>
        </Card>
      </Container>
        </Tab>
        <Tab eventKey="notes" title="Notes">
          <Row className="d-flex flex-row justify-content-center align-content-center">
            <Col sm={8}>
              <Form>
                <Form.Group
                  className="mb-3 text-dark"
                  controlId="Form.ControlTextarea1 resize: none"
                >
                  <Form.Label>
                    <Form.Control
                      type="text"
                      id="title"
                      aria-describedby="title"
                      placeholder="Title Here.."
                    />
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    placeholder="Leave Notes Here...."
                  />
                </Form.Group>
              </Form>
              <Button variant="light">Submit</Button>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="profile" title="Donors">
          <Card className="w-25 m-3">
            <Card.Body>
              <h1>John Doe</h1>
              <Card.Title>Donor List</Card.Title>
              <Table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rebecca</td>
                    <td>Sundquist </td>
                    <td>$ 250</td>
                  </tr>
                  <tr>
                    <td>Adam</td>
                    <td>Olsey</td>
                    <td>$ 500</td>
                  </tr>
                  <tr>
                    <td>sarah</td>
                    <td>Maskill</td>
                    <td>$ 1,500</td>
                  </tr>
                  <tr>
                 
                    <td>Johannes</td>
                    <td>Chitura</td>
                    <td>$1,750</td>
                  </tr>
                  <tr></tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Row>
            <Container>
              <Row md={1} className="g-4 py-4">
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
            </Container>
          </Row>
        </Tab>
      </Tabs>
    </>
  );
};

export default StudentTabs;
