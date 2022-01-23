import { Card, Container, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL } from '../../utils/queries'

const CardComponent = () => {
  const { error, data } = useQuery(QUERY_ALL);
  const students = data?.students || [];
  const donors = data?.donors || [];
  console.log(donors);

  let totalFundingNeeded = 0;
  students.map((student) => {
    return totalFundingNeeded += student.fundingNeeded
  })

 if (error) {return console.log(error.networkError.result.errors) };

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-content-center">
        <Row>
          <Col lg={3}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Col>
                <Card.Title>
                  <h5>Total Students</h5>
                </Card.Title>
                </Col>
                <Col>
                <Card.Text>
                  <h3>{students.length}</h3>
                </Card.Text>
                <h3>
                  <Icon icon="ph:student-fill" width="50" height="50" />
                </h3>
                </Col>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Card.Title>
                  <h5>Total Donors</h5>
                </Card.Title>
                <Card.Text>
                  <h3>{donors.length}</h3>
                </Card.Text>
                <h3>
                  <Icon icon="iconoir:donate" width="50" height="50" />
                </h3>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Card.Title>
                  <h5>Pledge Total YTD</h5>
                </Card.Title>
                <Card.Text>
                  <h3>$65,232</h3>
                </Card.Text>
                <h3>
                  <Icon icon="fa-solid:donate" width="50" height="50" />
                </h3>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Card.Title>
                  <h5>Avg Donation YTD</h5>
                </Card.Title>
                <Card.Text>
                  <h3>$600</h3>
                </Card.Text>
                <h3>
                  <Icon icon="fa-solid:donate" width="50" height="50" />
                </h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardComponent;
