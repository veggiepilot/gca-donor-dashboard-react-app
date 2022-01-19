import React from "react";
import { Card, Container } from "react-bootstrap";

const SingleDonor = () => {
  return (
    <>
      <Container className=" d-flex flex-row justify-content-center align-content-center">
        <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
          <Card.Header>Donor Information</Card.Header>
          <Card.Body>
            <Card.Title>
              <i className="fas fa-user-graduate"></i>
            </Card.Title>
            <Card.Text className="d-flex flex-row justify-content-between p-4">
              <h1 className="d-flex flex-start justify-content-start align-content-center">
                23
              </h1>
              <span className="d-flex flex-end justify-content-end align-content-center">
                Total Students
              </span>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
          <Card.Header>Donor Total</Card.Header>
          <Card.Body>
            <Card.Title>
              <i className="fas fa-user-graduate"></i>
            </Card.Title>
            <Card.Text className="d-flex flex-row justify-content-between p-4">
              <h1 className="d-flex flex-start justify-content-start align-content-center">
                13
              </h1>
              <span className="d-flex flex-end justify-content-end align-content-center">
                Total Donors
              </span>
            </Card.Text>
          </Card.Body>
          .
        </Card>

        <Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
          <Card.Header>Pledge Fund Summary</Card.Header>
          <Card.Body>
            <Card.Title>
              <i className="fas fa-user-graduate"></i>
            </Card.Title>
            <Card.Text className="d-flex flex-row justify-content-between p-4">
              <h1 className="d-flex flex-start justify-content-start align-content-center">
                $34,506
              </h1>
              <span className="d-flex flex-end justify-content-end align-content-center">
                Total Pledge
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SingleDonor;
