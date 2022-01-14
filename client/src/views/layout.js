import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar";
const Layout = () => {
  return (
    <Container fluid={true} className="px-0">
      <Row className="min-vh-100 m-0">
        <Col xl={1} sm={2} className="sidenav">
          <SideBar />
        </Col>
        <Col xl={11} sm={10} className="main">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
