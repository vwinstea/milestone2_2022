// This is the data we'll be working with!

interface Volunteer {
  name: string;
  age: number;
  email: string;
  position: "volunteer" | "staff";
  city: string;
  state: string;
}

const userData: Volunteer[] = [
  {
    name: "Joe",
    age: 30,
    email: "joe@email.com",
    position: "volunteer",
    city: "LA",
    state: "CA",
  },
  {
    name: "Jenny",
    age: 24,
    email: "jenny@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Jeff",
    age: 40,
    email: "jeff@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
  {
    name: "Julie",
    age: 34,
    email: "julie@email.com",
    position: "staff",
    city: "Seattle",
    state: "WA",
  },
  {
    name: "Lucy",
    age: 21,
    email: "lucy@email.com",
    position: "volunteer",
    city: "SB",
    state: "CA",
  },
  {
    name: "Lee",
    age: 27,
    email: "lee@email.com",
    position: "volunteer",
    city: "SLO",
    state: "CA",
  },
  {
    name: "Leander",
    age: 29,
    email: "leander@email.com",
    position: "staff",
    city: "SB",
    state: "CA",
  },
  {
    name: "Luna",
    age: 66,
    email: "luna@email.com",
    position: "volunteer",
    city: "SF",
    state: "CA",
  },
];

// Lambda Functions
/* Define a new lambda function that finds the average age of the users in the data. 
  Hint: user data is stored in the userData object above. 
*/
type GetVolunteer = (data: Volunteer[]) => Volunteer;
let findAverage: GetVolunteer;

//console.log(findAverage(userData));

// Data Handling
/* Use data handling function(s) to find the first index of someone from San Francisco (SF)
  Hint: Use a lambda function as a value
*/
type GetIndex = (data: Volunteer[]) => number;
let findIndexAns: GetIndex;

//console.log(findIndexAns);

/* Use data handling function(s) to find all of the volunteers from California (CA) over an age threshold n
 */
type GetVolunteers = (data: Volunteer[]) => Volunteer[];
let findCAOverN: GetVolunteers;

//console.log(findCAOverN(userData, 25));

/* Use data handling function(s) to find the first staff member from Santa Barbara (SB)
 */
let findSBStaff: GetVolunteer;

//console.log(findSBStaff(userData));

// Spread Operator
let kyle: Volunteer = {
  name: "Kyle",
  age: 18,
  email: "kyle@email.com",
  position: "volunteer",
  city: "SD",
  state: "CA",
};

/* Lets make a clone of Kyle above using the spread operator and assign it to kyleClone
 */
let kyleClone: Volunteer;

//console.log(kyleClone);

/* Next, lets use the spread operator to update your kyleClone object with the updatedLocation defined below and assign it to kyleNew
 */
let updatedLocation = { city: "Seattle", state: "WA" };

let kyleNew: Volunteer;

//console.log(kyleNew);

/* Now that we have our updated kyle, lets use object destructuring to get his name, age, and city
 */
//Code here, no stub this time

//console.log(name, age, city);

//Final Test:
/* Use all the skills we've covered today to get the email address of the user from Santa Barbara (SB) over the age of 25
 */
//Code Here

//console.log(email);
