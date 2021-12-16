import React from "react";
import { Link, HashRouter, useParams, Route } from "react-router-dom";
import bootstrap from "bootstrap";

import { findBikeById,  updateBike, deleteBike} from "./bike-services";

import { findStationById, findAllStations} from "../stations/station-services";
import {findAllUsers} from "../users/user-services"

function BikeEdit() {
  const params = useParams();
  const [bike, setBike] = React.useState(null);

  const [availableStation, setAvailableStation] = React.useState(null);
  const [availableUser, setAvailableUser] = React.useState(null);


  React.useEffect(() => {
    findBikeById(params.id)
      .then((res) => setBike(res[0]))
      findAllStations().then((response) => setAvailableStation(response.message.map(({ station_id }) => station_id)))
      findAllUsers().then((response) => setAvailableUser(response.message.map(({userID}) => userID)))
  }, []);

  

  return (
    <header className="App-header row">
      <div className="col">
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
          <br />          <br />

          <label for="lastName">User</label>
          <select name="user" id="user"       defaultValue={bike.user}
          onChange={(e) =>
            setBike((bike) => ({
              ...bike,
              user: e.target.value,
            }))
          }>
         {availableUser && availableUser.map((user) => <option selected={user == bike.user ? "selected" : ""} value={user}>{user}</option> )}
        </select>
          
          <br />          <br />

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
         {availableStation && availableStation.map((station) => <option selected={station == bike.station_id ? "selected" : ""}  value={station}>{station}</option> )}
        </select>
        <br />  <br /> <br />

          <br />
         
          <div className="m-5 " />
          <a
            href="/"
            className="btn btn-DANGER"
            onClick={() => deleteBike(params.id)}
          >
            DELETE
          </a>
          <a href="/"
            className="btn btn-primary"
            onClick={() => updateBike(params.id, bike)}
          >
            CONFIRM EDITS
          </a> 
          <a href="/">BACK</a>
        </>
      )}
      </div>
      <div className=" col float-right">
        {  bike && bike.station_id &&     <> <h1>Station associated with bike</h1>
        <Link to={`/stations/edit/${bike.station_id}`}>STATION {bike.station_id}</Link></>}
   
        {bike && bike.user &&<> <h1>User associated with bike</h1>
        <Link to={`/users/edit/${bike.user}`}>USER {bike.user}</Link></>}

      </div>
    </header>
  );
}

export default BikeEdit;
