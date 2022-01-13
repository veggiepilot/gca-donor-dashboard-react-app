<<<<<<< HEAD
import React from "react";
import { Card, Container, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const PledgeCard = () => {
=======
import { Card, Table } from "react-bootstrap";

 const PledgeCard = ()=> {
>>>>>>> 63ca410ec2c7792a1a11d08b4bbdfc657dc09c57
  return (
    <>
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
export default PledgeCard;