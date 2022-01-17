import { Card, Container, Col, Row, Table} from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL } from "../../utils/queries";

const CardComponent = () => {
  const { error, data } = useQuery(QUERY_ALL);
  const students = data?.students || [];
  const donors = data?.donors || [];
  if (error) {
    return console.log(error.networkError.result.errors);
  }

  return (
    <>
      <Container className="header d-flex flex-column justify-content-center align-content-center">
        <h1 className="py-2">GAC Admin Dashboard</h1>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-content-center">
        <Row>
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body> 
                <Card.Title>
                  <h5>Total Students</h5>
                  <h4>{students.length}</h4>
                </Card.Title>
                  <Card.Text>
                    <Icon icon="ph:student-fill" width="30" height="30" />
                 </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <h5>Total Donors</h5>
                  <h4>{donors.length}</h4>
                </Card.Title>
                <Card.Text>
                <Icon icon="iconoir:donate" width="30" height="30" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <h5>Pledge Total YTD</h5>
                  <h4>$65,232</h4>
                </Card.Title>
                <Card.Text>
                   <Icon icon="fa-solid:donate" width="30" height="30" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <h5>Avg Donation YTD</h5>
                  <h4>$600</h4>
                </Card.Title>
                <Card.Text>
                  <Icon icon="fa-solid:donate" width="30" height="30" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className=" mt-2 d-flex flex-column justify-content-center align-content-center">
        <Row>
          <Col lg={4}>
            <Card className="text-center d-flex flex-row justify-content-start align-content-start">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-start m-1 p-4">
                  Students In Need
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-around p-2">
                  <h3>23</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-start m-1 p-4">
                  Funding Goal
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-center p-2">
                  <h3>$150,000</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-2">
        <Row>
          <Col lg={12}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Title>Student List</Card.Title>
              <Card.Body>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Funding Needed</th>
                    </tr>
                  </thead>
                  {students &&
                    students.map((student) => (
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
          </Col>
        </Row>
      </Container>

    </>
  );
};
export default CardComponent;
