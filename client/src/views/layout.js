import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar";
import Header from "../components/header"
import Footer from "../components/footer"
const Layout = () => {
  return (
    <>
    <Header/>
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
    <Footer/>
    </>
  );
};

export default Layout;
