import React from "react";
import { Card, Container, Stack, Form,Button } from "react-bootstrap";

const DonorsCard = () => {
  return (
    <>

<Container className="d-flex flex-column justify-content-start align-content-start p-3 w-25 ">
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search..." />
          <Button variant="primary">Find</Button>
          <div className="vr" />
        </Stack>
</Container>

<Container className=" d-flex flex-row justify-content-center align-content-center">
<Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
  <Card.Header>Students</Card.Header>
  <Card.Body>
    <Card.Title><i class="fas fa-user-graduate"></i></Card.Title>
    <Card.Text className="d-flex flex-row justify-content-between p-4">
    <h1 className="d-flex flex-start justify-content-start align-content-center">23</h1>
    <p className= "d-flex flex-end justify-content-end align-content-center">Total Students</p>
    </Card.Text>
  </Card.Body>
</Card>


<Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
  <Card.Header>Donor Total</Card.Header>
  <Card.Body>
  <Card.Title><i class="fas fa-user-graduate"></i></Card.Title>
    <Card.Text className="d-flex flex-row justify-content-between p-4">
    <h1 className="d-flex flex-start justify-content-start align-content-center">13</h1>
    <p className= "d-flex flex-end justify-content-end align-content-center">Total Donors</p>
    </Card.Text>
  </Card.Body>.
</Card>



<Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
  <Card.Header>Pledge Fund Summary</Card.Header>
  <Card.Body>
  <Card.Title><i class="fas fa-user-graduate"></i></Card.Title>
    <Card.Text className="d-flex flex-row justify-content-between p-4">
    <h1 className="d-flex flex-start justify-content-start align-content-center">$34,506</h1>
    <p className= "d-flex flex-end justify-content-end align-content-center">Total Pledge</p>
    </Card.Text>
  </Card.Body>
</Card>
</Container>

</>
  );
}
export default DonorsCard;