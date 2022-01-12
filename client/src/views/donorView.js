import { Col, Container, Row} from "react-bootstrap";
import DonorsCard from "../components/cards/donorsCard";
import SideBar from "../components/sideBar";

const DonorView = () => {
  return (
  
      <Container fluid={true}>
      <Row className="min-vh-100 m-0"> 
          <Col lg={1} className="bg-dark bg-gradient text-white">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary bg-gradient">
            <DonorsCard />
          </Col>
        </Row>
      </Container>
  
  );
};
export default DonorView;
