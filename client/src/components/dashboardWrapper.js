import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBarWrapper from "./dropDownComponents/sideBarWrapper";

const DashboardWrapper = () => {
  return (
    <Container>
      <Row lg={1}>
        <Col md={2}>
          <SideBarWrapper />
        </Col>
        <Col md={10}>
         
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardWrapper;
