import { Container, Col, Row } from "react-bootstrap";

const AccountVeiw = (SideBar, AccountForm, Header) => {
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
export default AccountVeiw;
