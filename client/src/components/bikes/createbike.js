import React from "react";
import { Link, HashRouter, useParams, Route } from "react-router-dom";
import bootstrap from "bootstrap";

import { createBike } from "./bike-services";

function CreateBike() {
  const params = useParams();

  const [bike, setBike] = React.useState({bikeId:66, inUse: 0,
  station_id:1});

  return (
    <header className="App-header">
    <h1>bike {params.id} EDIT</h1>
    {console.log(bike)}
    {!bike ? (
      "Loading..."
    ) : (
      <>
        <label for="inUse">In use?</label>
        <input
          type="text"
          id="text"
          name="inUse"
          defaultValue={bike.inUse}
          onChange={(e) =>
            setBike((bike) => ({
              ...bike,
              inUse: e.target.value,
            }))
          }
        />
        <br />
        <label for="lastName">User</label>
        <input
          name="user"
          defaultValue={bike.user}
          onChange={(e) =>
            setBike((bike) => ({
              ...bike,
              user: e.target.value,
            }))
          }
        />
        <br />
        <label for="station_id">Station ID</label>
        <input
          name="station_id"
          defaultValue={bike.station_id}
          onChange={(e) =>
            setBike((bike) => ({
              ...bike,
              station_id: e.target.value,
            }))
          }
        />
        <br />
       

        <tr>
          <th>{}</th>
          <th>{}</th>
        </tr>
        <a
          href="/"
          className="btn btn-warning"
          onClick={() => createBike(bike, params.id)}
        >
          CREATE BIKE
        </a>
        <a href="/">BACK</a>
      </>
    )}
  </header>
  );
}

export default CreateBike;
