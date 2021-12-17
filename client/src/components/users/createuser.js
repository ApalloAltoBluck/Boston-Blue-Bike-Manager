import React from "react";
import { Link, HashRouter, useParams, Route } from "react-router-dom";
import bootstrap from "bootstrap";

import { createUser } from "./user-services";

function CreateUser() {
  const params = useParams();

  const [userCopy, setUserCopy] = React.useState({
    firstName: "JANE",
    lastName: "Doe",
    membership: "STUDENT",
    email: "john@apple.com",
    username: "YOUR USERNAME",
    password: "PASSWORD",
    dateOfBirth: new Date()
      .toISOString("2021-12-08T05:00:00.000Z")
      .slice(0, 10),
  });

  return (
    <header className="App-header">
      <h1>USER {params.id} EDIT</h1>
      {console.log(userCopy)}
      <>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="text"
          name="firstName"
          defaultValue={userCopy.firstName}
          onChange={(e) =>
            setUserCopy((userCopy) => ({
              ...userCopy,
              firstName: e.target.value,
            }))
          }
        />
        <br />
        <label for="lastName">Last Name:</label>
        <input
          name="lastName"
          defaultValue={userCopy.lastName}
          onChange={(e) =>
            setUserCopy((userCopy) => ({
              ...userCopy,
              lastName: e.target.value,
            }))
          }
        />
        <br />
        <label for="membership">Membership</label>
        <input
          name="membership"
          defaultValue={userCopy.membership}
          onChange={(e) =>
            setUserCopy((userCopy) => ({
              ...userCopy,
              membership: e.target.value,
            }))
          }
        />
        <br />
        <label for="email">email</label>
        <input
          name="email"
          defaultValue={userCopy.email}
          onChange={(e) =>
            setUserCopy((userCopy) => ({
              ...userCopy,
              email: e.target.value,
            }))
          }
        />
        <br />

        <label for="username">username</label>
        <input
          name="username"
          defaultValue={userCopy.username}
          onChange={(e) =>
            setUserCopy((userCopy) => ({
              ...userCopy,
              username: e.target.value,
            }))
          }
        />
        <br />

        <label for="password">password</label>
        <input
          name="password"
          onChange={(e) =>
            setUserCopy((userCopy) => ({
              ...userCopy,
              password: e.target.value,
            }))
          }
          defaultValue={userCopy.password}
        />
        <br />

        <label for="dob">date of birth</label>
        <input
          name="dob"
          type="date"
          onChange={(e) =>
            setUserCopy((userCopy) => ({
              ...userCopy,
              dateOfBirth: new Date(e.target.value).toISOString().slice(0, 10),
            }))
          }
          defaultValue={new Date(userCopy.dateOfBirth)
            .toISOString()
            .slice(0, 10)}
        />

        <tr>
          <th>{}</th>
          <th>{}</th>
        </tr>
        <a
          href="/"
          className="btn btn-primary"
          onClick={() => createUser(userCopy)}
        >
          CREATE
        </a>
        <a href="/">BACK</a>
      </>
    </header>
  );
}

export default CreateUser;
