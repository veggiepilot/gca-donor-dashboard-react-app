import { Container, Button, Stack, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <Container className=" header d-flex flex-column justify-content-start align-content-start fixed-top">
        <h1 className="py-2">GCA Dashboard</h1>
        {Auth.loggedIn() ? (
          <Stack direction="horizontal">
            <span>Hey there, {Auth.getProfile().data.firstName}!</span>
            <Button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </Button> 
            <Form.Control className="w-25" placeholder="Search..." />
           
            <Button variant="light">Find</Button>
          </Stack>
        ) : (
          <Link className="btn btn-lg btn-info m-2" to="/">
            Login
          </Link>
        )}
      </Container>
    </>
  );
};
export default Header;
