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
import { QUERY_DONORS } from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const DonorsCard = () => {
  const { error, data } = useQuery(QUERY_DONORS);
  const donors = data?.donors || [];
  console.log(donors);
  if (error) {return console.log(error) };
  // if (!donors.length) {
  //   return <h3>No Donors Yet</h3>;
  // }
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
          <Card.Header>Donor List</Card.Header>
          
          <Card.Body>
            <Card.Title>
              <Icon icon="ph:student-fill" width="50" height="50" />
            </Card.Title>
      
            <Table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Times Donated</th>
                  <th></th>
                </tr>
              </thead>
              {donors && donors.map((donor) =>(
              <tbody key={donor._id}>
                <tr>
                  <td>{donor.firstName}</td>
                  <td>{donor.lastName}</td>
                  <td>{donor.donation.length}</td>
                  <td><Link to={`/donorinfo/${donor._id}`}><Button>View Information</Button></Link></td>
                  <td><Link to={`/newdonation/${donor._id}`}>
                  <Button>Donate</Button>
                  </Link>
                  </td>
                </tr>
              </tbody>
              ))}
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
              <i className="fas fa-user-graduate"></i>
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
