import logo from "./logo.svg";

import BikeTable from "./components/bikes/BikeTable";
import BikeEdit from "./components/bikes/BikeEdit"
import CreateBike from "./components/bikes/createbike"

import StationTable from "./components/stations/StationTable";
import CreateStation from "./components/stations/createstation"
import StationEdit from "./components/stations/stationedit"
import EditUser from "./components/users/useredit"
import CreateUser from "./components/users/createuser"
import "./App.css";

import React from "react";
import { Link , HashRouter, Routes, Route} from "react-router-dom";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";


// TO DO
// -turn each table into a react component that is fed a server response, and returns all values
// mapped over and stylized

function HomePage() {
  const [users, setUsers] = React.useState(null);
  
  React.useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((dataUsers) => setUsers(dataUsers.message))
      .then((dataUser) => console.log(dataUser));
  }, []);


  return (
    <header className="App-header">
      <nav class="navbar navbar-expand-lg navbar-light custom-nav">
  <h1 class="navbar-brand my-auto text-light" href="#">BLUE BIKE MANAGER</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav text-light">
      <li class="nav-itemactive ">
        <a class="nav-link text-light" href="#/users/create">ADD USER</a>
      </li>
      <li class="nav-item   ">
        <a class="nav-link text-light" href="#/bikes/create">ADD BIKE</a>
      </li>
      <li class="nav-item  ">
        <a class="nav-link text-light" href="#/stations/create">ADD STATION</a>
      </li>

    </ul>
  </div>
</nav>  
    <h1>USERS</h1>
    <table id="table-example-1">
      <tr>
      <th>User ID</th>

        <th>First Name</th>
        <th>Last Name</th>
        <th>Membership type</th>
        <th>Email</th>
        <th>Username</th>
        <th>Password</th>
        <th>DOB</th>
        <th>EDIT</th>
      </tr>
      {!users
        ? "Loading..."
        : Object.entries(users).map((keyName, i) => (
          <>
          {console.log(users)}
              <tr key={i}>
              <td>{users[i].userID}</td>

                <td>{users[i].firstName}</td>
                <td>{users[i].lastName}</td>
                <td>{users[i].membership}</td>
                <td>{users[i].email}</td>
                <td>{users[i].username}</td>
                <td>{users[i].password}</td>
                <td>{users[i].dateOfBirth}</td>
                <td> < Link to={`/users/edit/${users[i].userID}`} className="btn btn-warning"> 
                EDIT
            </Link></td>

              </tr>
            
           
            </>
          ))}
                      < Link to={`/users/create`} className="btn btn-warning"> CREATE USER</Link>

    </table>

    <BikeTable />
    <StationTable />
  </header>
  )
}

function App() {
  return (
     <HashRouter>
      <Routes>

          <Route element={<HomePage />} exact={true} path="/">
          </Route>
          <Route element={<EditUser />} exact={true} path="/users/edit/:id">
          </Route>
          <Route element={<CreateUser />} exact={true} path="/users/create/">
          </Route>
          <Route element={<BikeEdit />} exact={true} path="/bikes/edit/:id">
          </Route>
          <Route element={<CreateBike />} exact={true} path="/bikes/create">
          </Route>
          <Route element={<CreateStation />} exact={true} path="/stations/create">
          </Route>
          <Route element={<StationEdit />} exact={true} path="/stations/edit/:id">
          </Route>
        </Routes>
        </HashRouter>
  );
}

export default App;
