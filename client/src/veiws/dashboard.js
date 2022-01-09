import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../components/dropDownComponents/sideBar";
import StudentDataCard from "../components/studentDataCard";
import PledgeCard from "../components/PledgeCard";
import DonorsCard from "../components/donorsCard";

const Dashboard = () => {
  return (
    <Container className="m-3" fluid="true">
      <Row>
        <Col lg={2} className="bg-primary">
          <SideBar/>
        </Col>
        <Col lg={10} className="bg-primary">
         <StudentDataCard/>
          <DonorsCard/>
         <PledgeCard/>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
