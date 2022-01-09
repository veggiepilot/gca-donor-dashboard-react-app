import {Container,Row,Col} from "react-bootstrap";
import SideBar from "../components/dropDownComponents/sideBar";
import CardComponent from "../components/cardComponent"
import Header from "../components/header";

const Dashboard = () => {
  return (
    <>
    <Header />
    <Container className="m-3" fluid="true">
      <Row>
        <Col lg={2} className="bg-primary">
          <SideBar/>
        </Col>
        <Col lg={10} className="bg-primary">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Dashboard;
