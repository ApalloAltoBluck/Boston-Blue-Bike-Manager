import React from "react";
import { Link, HashRouter, useParams, Route } from "react-router-dom";
import bootstrap from "bootstrap";

import { findUserById, updateUser, deleteUser } from "./user-services";
import { findAllBikes } from "../bikes/bike-services";

function UserEdit() {
  const params = useParams();
  const [user, setUser] = React.useState(null);

  const [userCopy, setUserCopy] = React.useState(null);

  const [bike, setBike] = React.useState(null);

  React.useEffect(() => {
    findUserById(params.id)
      .then((res) => setUserCopy(res[0]))
      .then(setUser(userCopy));
  }, []);

  React.useEffect(() => {
    findAllBikes().then((response) =>
      response.message.map((bike) =>
        bike.user == params.id ? setBike(bike.bikeID) : console.log(bike)
      )
    );
  }, []);
  console.log(bike);

  return (
    <header className="App-header row">
      {console.log(userCopy)}
      {!userCopy ? (
        "Loading..."
      ) : (
        <div className="col">
          <h1>USER {params.id} EDIT</h1>

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
                dateOfBirth: new Date(e.target.value)
                  .toISOString()
                  .slice(0, 10),
              }))
            }
            defaultValue={new Date(userCopy.dateOfBirth)
              .toISOString()
              .slice(0, 10)}
          />

          <a
            href="/"
            className="btn btn-DANGER"
            onClick={() => deleteUser(params.id)}
          >
            DELETE
          </a>
          <a
            href="/"
            className="btn btn-primary"
            onClick={() => updateUser(params.id, userCopy)}
          >
            CONFIRM EDITS
          </a>
          <a href="/">BACK</a>
        </div>
      )}
      <div className="col float-right">
        <h1>ASSOCIATED BIKE</h1>
        {bike && <Link to={`/bikes/edit/${bike}`}>EDIT BIKE {bike}</Link>}
      </div>
    </header>
  );
}

export default UserEdit;
