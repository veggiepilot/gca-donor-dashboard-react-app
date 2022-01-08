import React from "react";
import { Card, Table } from "react-bootstrap";

export default function App() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Donors Data</Card.Title>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rebecca</td>
              <td>Sundquist </td>
              <td>@Sund</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Adam</td>
              <td>Olsey</td>
              <td>@Olse</td>
            </tr>
            <tr>
              <td>3</td>
              <td>sarah</td>
              <td>Maskill</td>
              <td>@Maski</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Johannes</td>
              <td>Chitura</td>
              <td>@Chitu</td>
            </tr>
            <tr>
            </tr> 
            <tr>
              <td>5</td>
              <td colSpan="2">Johannes Chitura</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}