import React from "react";
import { Link, HashRouter, useParams, Route } from "react-router-dom";
import bootstrap from "bootstrap";

import { createBike } from "./bike-services";
import { findStationById, findAllStations} from "../stations/station-services";
import { findAllUsers } from "../users/user-services";

function CreateBike() {
  const params = useParams();


  const [availableStation, setAvailableStation] = React.useState(null);
  const [availableUser, setAvailableUser] = React.useState(null);
  React.useEffect(() => {
    findAllStations().then((response) => setAvailableStation(response.message.map(({ station_id }) => station_id)))
    findAllUsers().then((response) => setAvailableUser(response.message.map(({userID}) => userID)))
  }, []) ;

  const [bike, setBike] = React.useState({bikeId:66, inUse: 0, user: (availableUser ? availableUser[0] : null), station: (availableStation?  availableStation[0] : null )});




  return (
    <header className="App-header">

    <h1>bike {params.id} CREATE</h1>
    {console.log(availableStation)}
    {console.log(availableUser)}

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
        {/* <input
          name="user"
          defaultValue={bike.user}
          onChange={(e) =>
            setBike((bike) => ({
              ...bike,
              user: e.target.value,
            }))
          }
        /> */}
        <select name="user" id="user"        defaultValue={bike.user}
          onChange={(e) =>
            setBike((bike) => ({
              ...bike,
              user: e.target.value,
            }))
          }>
         {availableUser && availableUser.map((user) => <option value={user}>{user}</option> )}
        </select>
        <br />
        <label for="station_id">Station ID</label>
                <select     name="station_id"
          defaultValue={bike.station_id}
          onChange={(e) =>
            setBike((bike) => ({
              ...bike,
              station_id: e.target.value,
            }))
          }>
         {availableStation && availableStation.map((station) => <option value={station}>{station}</option> )}
        </select>
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
