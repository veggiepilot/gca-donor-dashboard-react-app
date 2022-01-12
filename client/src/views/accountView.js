import {Col, Row, Container } from "react-bootstrap";
import SideBar from "../components/sideBar";
import AccountForm from "../components/forms/accountForm";

const AccountView = () => {
  return (
      <Container fluid={true}>
        <Row className="min-vh-100 m-0"> 
          <Col lg={1} className="bg-dark bg-gradient text-white">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary bg-gradient text-dark">
            <AccountForm />
          </Col>
        </Row>
      </Container>
  );
};
export default AccountView;
