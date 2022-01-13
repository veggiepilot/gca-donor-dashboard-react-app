import React from "react";
import { Card, Container } from "react-bootstrap";

const CardComponent = () => {
  return (
<Container className=" d-flex flex-column justify-content-center align-content-center">
<Card className="text-center w-50 m-3 p-3 d-flex flex-column justify-content-center align-content-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
</Container>
  );
}
export default CardComponent;