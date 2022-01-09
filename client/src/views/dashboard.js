import {Container,Row,Col} from "react-bootstrap";
import SideBar from "../components/dropDownComponents/sideBar";
import CardComponent from "../components/cardComponent"
import Header from "../components/header";

const Dashboard = () => {
  return (
    <>
    <Header />
    <Container className="p-1" fluid="true">
      <Row>
        <Col lg={1} className="bg-primary p-4">
          <SideBar/>
        </Col>
        <Col lg={11} className="bg-primary p-4">
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
