import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link , HashRouter, Routes, Route} from "react-router-dom";

// TO DO
// -turn each table into a react component that is fed a server response, and returns all values
// mapped over and stylized

export default function BikeTable() {
  const [bikes, setBikes] = React.useState(null);

  React.useEffect(() => {
    fetch("/bikes")
      .then((res) => res.json())
      .then((dataBikes) => setBikes(dataBikes.message));
  }, []);

  return (
    <div className="">
                <h1>
        BIKES
        </h1>
        <table className="">
          <tr>
            <th>Bike Id</th>
            <th>Bike in use</th>
            <th>User</th>
            <th>station last Docked At</th>
          </tr>
            {!bikes
              ? "Loading..."
              : Object.entries(bikes).map((keyName, i) => (
                    <tr>
                      <td>BIKE {bikes[i].bikeID} </td>
                      <td> {bikes[i].inUse} </td>
                      <td> {bikes[i].user} </td>
                      <td> {bikes[i].station_id} </td>
                      <td> {bikes[i].bikeID} </td>
                      <td> < Link to={`/bikes/edit/${bikes[i].bikeID}`} className="btn btn-warning"> 
                      EDIT </Link> </td>

                    </tr>
                ))}
        </table>
        <Link className="btn btn-warning" to="/bikes/create">CREATE BIKE</Link>
    </div>
  );
}
