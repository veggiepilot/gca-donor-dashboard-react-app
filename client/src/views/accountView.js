import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import SideBar from "../sideBar";
import AccountForm from "../components/forms/accountForm";

const AccountView = () => {
  return (
    <>
      <Header />
      <Container className="p-1" fluid="true">
        <Row>
          <Col lg={1} className="bg-primary-outline p-4">
            <SideBar />
          </Col>
          <Col lg={11} className="bg-primary p-4">
            <AccountForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AccountView;
