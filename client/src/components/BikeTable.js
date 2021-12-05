import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <th>Station ID</th>
          </tr>
            {!bikes
              ? "Loading..."
              : Object.entries(bikes).map((keyName, i) => (
                    <tr>
                      <td>BIKE {bikes[i].bikeID} </td>
                      <td> {bikes[i].inUse} </td>
                      <td> {bikes[i].user} </td>
                      <td> {bikes[i].station_id} </td>
                    </tr>
                ))}
        </table>
    </div>
  );
}
