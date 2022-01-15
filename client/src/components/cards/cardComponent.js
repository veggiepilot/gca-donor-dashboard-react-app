import { Card, Container, Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL } from '../../utils/queries'

const CardComponent = () => {
const { error, data } = useQuery(QUERY_ALL);
const students = data?.students || [];
const donors = data?.donors || [];
 if (error) {return console.log(error.networkError.result.errors) };

  return (
    <>
      <Container className="header d-flex flex-column justify-content-center align-content-center">
        <h1 className="py-2">GAC Admin Dashboard</h1>
      </Container>

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
                <article>
                  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                  Cicero in 45 BC "At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias us
                  saepe eveniet ut et voluptates repudiandae sint et molestiae
                  non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores alias
                  consequatur aut perferendis doloribus asperiores repellat."
                </article>
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
                  <h3>9/09/2022</h3>
                </Card.Text>
                <article>
                  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                  Cicero in 45 BC "At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias us
                  saepe eveniet ut et voluptates repudiandae sint et molestiae
                  non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores alias
                  consequatur aut perferendis doloribus asperiores repellat."
                </article>
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
                  <h3>8/26/2022</h3>
                </Card.Text>
                <article>
                  Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                  Cicero in 45 BC "At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias us
                  saepe eveniet ut et voluptates repudiandae sint et molestiae
                  non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores alias
                  consequatur aut perferendis doloribus asperiores repellat."
                </article>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardComponent;
