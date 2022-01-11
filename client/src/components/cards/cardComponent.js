import React from "react";
import { Card, Container, } from "react-bootstrap";

const CardComponent = () => {
  return (
    <>
<Container className=" d-flex flex-row justify-content-center align-content-center">
  
<Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
  <Card.Header>Student Total</Card.Header>
  <Card.Body>
    <Card.Title>insert icon for student</Card.Title>
    <Card.Text className="d-flex flex-row justify-content-between p-4">
    <h1 className="d-flex flex-start justify-content-start align-content-center">23</h1>
    <p className= "d-flex flex-end justify-content-end align-content-center">Total Students</p>
    </Card.Text>
  </Card.Body>
</Card>


<Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
  <Card.Header>Donor Total</Card.Header>
  <Card.Body>
    <Card.Title>insert icon for donor</Card.Title>
    <Card.Text>
      <h1>13</h1><p>Total Donors</p>
    </Card.Text>
  </Card.Body>
</Card>



<Card className="text-center w-100 d-flex flex-column justify-content-center align-content-center m-2">
  <Card.Header>Pledge Fund Summary</Card.Header>
  <Card.Body>
    <Card.Title>insert pledge icon</Card.Title>
    <Card.Text>
      <h1>$34,506</h1><p>Total Pledge</p>
    </Card.Text>
  </Card.Body>
</Card>
</Container>

</>
  );
}
export default CardComponent;