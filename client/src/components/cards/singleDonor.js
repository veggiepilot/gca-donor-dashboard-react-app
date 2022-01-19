/* eslint-disable no-unused-vars */
import { Card, Row, Button, Stack, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SINGLE_DONOR } from "../../utils/queries";
import { REMOVE_DONOR } from "../../utils/mutations";

const SingleDonor = () => {
const { donorId } = useParams();
  const [removeDonor, { mutationError }] = useMutation(REMOVE_DONOR);
  if (mutationError) {
    console.log(mutationError.networkError.result.errors);
  }
  const handleRemoveDonor = async (_id) => {
      try {
          const {mutationData} = await
          removeDonor({
            variables: { donorId:donorId }
          });
      } catch (err) {
          console.error(err.networkError.result.errors)
      }
  }

  const { loading, data, error } = useQuery(QUERY_SINGLE_DONOR, {
    variables: { donorId: donorId },
  });

  const donor = data?.donor || {};
  console.log(donor);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return console.log(error.networkError.result.errors);
  }
  return (
    <>
      <Container className=" header d-flex flex-column justify-content-center align-content-center p-3 w-25 fixed-top">
        <h1 className="py-2">Donor Infomation</h1>
        <Card>
          {/* <Container className="donorInformation"> */}
          <Row className="mb-3">
            <h4>Name</h4>
            <h5>
              {donor.firstName} {donor.lastName}
            </h5>
            <h4>Address</h4>
            <h5>
              {donor.address1}, {donor.state} {donor.zip}
            </h5>
          </Row>
          <Row>
            <h4>Donations</h4>
            {donor &&
              donor.donation.map((donation) => (
                <div key={donation._id}>
                  <h5>{donation.amount}</h5>
                  <h5>{donation.date}</h5>
                </div>
              ))}
          </Row>

          <Stack gap={2} className="col-md-5 mt-3 mx-auto">
            <Link to="/dashboard">
              <Button variant="light" onClick={() => handleRemoveDonor(donorId)}>Delete Donor</Button>
            </Link>
          </Stack>
          {/* </Container> */}
        </Card>
      </Container>
    </>
  );
};

export default SingleDonor;
