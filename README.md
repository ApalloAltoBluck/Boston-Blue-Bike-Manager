# CS 3200(DATABASE DESIGN) final project

For our final, we based our CRUD application on the Boston Blue Bike API. This application utilizes a MySQL, Express, React and Node.js stack and relies on a database with three domain objects. 

### PROBLEM STATEMENT 
- From personal experience, we realized that it is very difficult to find an available blue bike on campus. Most of the time it’s based on timing or luck. As a result, we decided to create a database application for the Bluebikes transportation system in order to aid users with checking out a bluebike.

### SOLUTION STATEMENT
- We utilized the publicly available Bluebikes System Data in order to create a database which accurately represents the usage of the Bluebikes transportation system.Specifically, we used the Station and Bikes API’s. 

### USER DESCRIPTION
- A typical user would be someone who is looking to use a bluebike and wants to see the current status of bluebikes in their area. \

### DOMAIN OBJECTS DESCRIPTION
- Bike - a representation of a single blue bike in the system. It has four attributes: an integer bikeID(pk), a boolean inUse, an int lastRider, and an int stationID. BikeID serves as a unique identifier for each blue bike, and also is used as a primary key. inUse signifies whether the bike is currently being ridden (meaning that it has already been checked out). lastRider represents the userID of the last user who had checked out the bike. StationID represents the id of the bike dock last used or currently using.

- User - a representation of a user in the system. The user has 8 attributes: an integer userId which represents the ID of an user (and is also used as the primary key), a String firstName which represents 
the first name of a user, a String lastName representing the last name of a user, a String username representing the username of a user, a String password representing the password of a user, a String email representing the email of a user, a Date (class which represents a String in the form of “xx/xx/xxxx”) that represents the date of birth of a user, and an enumerator Membership, which represents the type of membership of a user (child, student, senior, or adult).

### HOW TO CONNECT TO DATABASE

- create a .env file at the root of the project with the following values
  `host= (eg:localhost)
  user= (eg:root)
  password= (eg:your_password)
  database= (eg:my_final_password)`
  
### HOW TO START
- Launch two terminals
- Terminal one: `npm install` then `npm start`
- Terminal two: `cd client` then `npm install` then `npm start`

