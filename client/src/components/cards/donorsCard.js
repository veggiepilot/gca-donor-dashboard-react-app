import React from "react";
import {
  Card,
  Container,
  Stack,
  Form,
  Button,
  Table,
  Row,
  Col,
} from "react-bootstrap";
import { Icon } from "@iconify/react";

const DonorsCard = () => {
  return (
    <>
      <Container className="d-flex flex-column justify-content-start align-content-start p-3 w-25 fixed-top">
        <Stack direction="horizontal">
          <Form.Control className="me-auto" placeholder="Search..." />
          <div className="vr" />
          <Button variant="light">Find</Button>
        </Stack>
      </Container>

      <Container className=" d-flex flex-row justify-content-center align-content-center">
        <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
          <Card.Header>Donors Student List</Card.Header>
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
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rebecca</td>
                  <td>Sundquist </td>
                  <td>$ 150.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Adam</td>
                  <td>Olsey</td>
                  <td>$65.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>sarah</td>
                  <td>Maskill</td>
                  <td>$1,230.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Johannes</td>
                  <td>Chitura</td>
                  <td>$450.00</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
              <Card.Header>Total Donations </Card.Header>
              <Card.Body>
                <Card.Title>
                  <Icon icon="iconoir:donate" width="50" height="50" />
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-center p-4">
                  <h1 className="d-flex flex-start justify-content-start align-content-center">
                    13
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
              <Card.Header>Pledge Fund Summary</Card.Header>
              <Card.Body>
                <Card.Title>
                  <Icon icon="fa-solid:donate" width="50" height="50" />
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-center p-4">
                  <h1 className="d-flex flex-start justify-content-start align-content-center">
                    $34,506
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
          <Card.Header>Pledge Fund Graph</Card.Header>
          <Card.Body>
            <Card.Title>
              <i class="fas fa-user-graduate"></i>
            </Card.Title>
            <Card.Text className="d-flex flex-row justify-content-center p-4">
              <h1 className="d-flex flex-row justify-content-center align-content-center">
                Coming Soon
              </h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default DonorsCard;
