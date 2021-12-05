import logo from './logo.svg';
import './App.css';

import BikeTable from './components/BikeTable'
import StationTable from './components/StationTable'

import React from "react";
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


// TO DO
// -turn each table into a react component that is fed a server response, and returns all values
// mapped over and stylized

function App() {
  const [users, setUsers] = React.useState(null);
  const [bikes, setBikes] = React.useState(null);

  React.useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((dataUsers) => setUsers(dataUsers.message));
      }, []);

  return (
    <div className="">
      <header className="App-header">
        <h1>
        USERS
        </h1>
      <table className="">
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Membership type</th>
    <th>Email</th>
    <th>Username</th>
    <th>Password</th>
    <th>DOB</th>

  </tr>
        {!users ? "Loading..." : Object.entries(users).map((keyName, i) => (
      <tr>
    <td>{users[i].firstName}</td>
    <td>{users[i].lastName}</td>
    <td>{users[i].membership}</td>
    <td>{users[i].email}</td>
    <td>{users[i].username}</td>
    <td>{users[i].password}</td>
    <td>{users[i].dateOfBirth}</td>

  </tr> 
))}
</table>

<BikeTable />
<StationTable />

      </header>

    </div>
  );
}

export default App;
