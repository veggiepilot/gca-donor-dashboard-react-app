import { Card, Container, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

const CardComponent = () => {
  return (
    <>
      <Container className="header d-flex flex-column justify-content-center align-content-center">
        <h1 className="py-2">GAC Admin Dashboard</h1>
      </Container>

      <Container className="d-flex flex-column justify-content-center align-content-center">
        <Row>
          <Col lg={4}>
            <Card className="text-center d-flex flex-row justify-content-start align-content-start">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-start m-1 p-4">
                  <h3>Total Students</h3>
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
                  <h3>Total Donors</h3>
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
                  <h3>Pledge Total YTD</h3>
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-around p-2">
                  <h3>$65,232</h3>
                </Card.Text>
                <h3>
                  <Icon icon="fa-solid:donate" width="50" height="50" />
                </h3>
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
                <h3>
                </h3>
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
                <h3>
                  
                </h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
    <Container className="mt-2">
        <Row>
          <Col lg={12}>
            <Card className="text-center d-flex flex-column justify-content-center align-content-center">
              <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-start m-1 p-4">
                  <h1>Announcements</h1>
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-around p-2">
                  <h3>9/12/2022</h3>
                </Card.Text>
                <p>
                Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias us saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardComponent;
