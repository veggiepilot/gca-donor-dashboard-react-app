import Header from "../components/header";
import AccountForm from "../components/accountForm"
import { Container, Col, Row} from "react-bootstrap";
import SideBar from "../components/dropDownComponents/sideBar";

const AccountVeiw = () => {
  return (
<>
<Header/>
<Container className="m-3" fluid="true">
  <Row>
    <Col lg={2} className="bg-primary">
      <SideBar />
    </Col>
    <Col lg={10} className="bg-primary">
      <AccountForm />
    </Col>
  </Row>
</Container>
</>
  );
};
export default AccountVeiw;
