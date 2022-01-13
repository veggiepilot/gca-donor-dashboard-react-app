import { Card, Container, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

const CardComponent = () => {
  return (
    <>
      <Container className="header d-flex flex-column justify-content-start align-content-start fixed-top">
        <h1 className="py-2">GAC Dashboard</h1>
      </Container>

      <Container className="d-flex flex-column justify-content-start align-content-start">
        <Row>
          <Col lg={4}>
            <Card className="text-center d-flex flex-row justify-content-start align-content-start">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-start m-1 p-4">
                  Total Students
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-around p-2">
                  <h3>23</h3>
                </Card.Text>
                <h3>
                  <Icon icon="ph:student-fill" width="50" height="50" />
                </h3>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-start m-1 p-4">
                  Total Donors
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-around p-2">
                  <h3>13</h3>
                </Card.Text>
                <h3>
                  <Icon icon="iconoir:donate" width="50" height="50" />
                </h3>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-start m-1 p-4">
                  Pledge Total
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-around p-2">
                  <h3>13</h3>
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
