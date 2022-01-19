/* eslint-disable no-unused-vars */

import { Card, Row, Button, Stack, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_STUDENT } from "../../utils/queries";
import { REMOVE_STUDENT } from "../../utils/mutations";

const SingleStudent = () => {
const { studentId } = useParams();
  const [removeStudent, { mutationError }] = useMutation(REMOVE_STUDENT);
  if (mutationError) {
    console.log(mutationError.networkError.result.errors);
  }
  const handleRemoveStudent = async (_id) => {
      try {
          const {mutationData} = await
          removeStudent({
            variables: { studentId:studentId }
          });
      } catch (err) {
          console.error(err.networkError.result.errors)
      }
  }

  const { loading, data, error } = useQuery(QUERY_SINGLE_STUDENT, {
    variables: { studentId: studentId },
  });

  const student = data?.student || {};
  console.log(student);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return console.log(error.networkError.result.errors);
  }
  return (
    <>
      <Container className=" header d-flex flex-column justify-content-center align-content-center p-3 w-25 fixed-top">
        <h1 className="py-2">Student Infomation</h1>
        <Card>
          {/* <Container className="donorInformation"> */}
          <Row className="mb-3">
            <h4>Name</h4>
            <h5>
              {student.firstName} {student.lastName}
            </h5>
            <h4>Parent Email</h4>
            <h5>
              {student.parentEmail}
            </h5>
          </Row>

          <Stack gap={2} className="col-md-5 mt-3 mx-auto">
            <Link to="/dashboard">
              <Button variant="light" onClick={() => handleRemoveStudent(studentId)}>Delete Student</Button>
            </Link>
          </Stack>
          {/* </Container> */}
        </Card>
      </Container>
    </>
  );
};

export default SingleStudent;
