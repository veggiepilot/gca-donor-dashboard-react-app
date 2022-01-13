import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../components/sideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
      <Container fluid={true} className="px-0">
      <Row className="min-vh-100 m-0"> 
          <Col lg={1} md={2} sm={12} className="bg-dark bg-gradient text-white">
            <SideBar />
          </Col>
          <Col lg={11} md={10} sm={12} className="bg-primary bg-gradient"> 
            <Outlet/>
          </Col>
        </Row>
      </Container>
  );
};

export default Layout;
