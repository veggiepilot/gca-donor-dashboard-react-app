import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar";
import Header from "../components/header"



const Layout = () => {
  return (
      <Container fluid={true} className="px-0">
      <Row className="min-vh-100 m-0"> 
          <Col lg={1} md={2} sm={12} className="bg-dark bg-gradient text-white">
            <SideBar />
          </Col>
          <Col lg={11} md={10} sm={12} className="bg-primary bg-gradient"> 
            <Header/>
            <Outlet/>
          </Col>
        </Row>
      </Container>
  );
};

export default Layout;
