API Currently hosted at https://celestialapi3.herokuapp.com/api/celestialbodies/earth

Reading data from my postgresql database - celestial bodies name, distance from sun, radius, length of day and length of year.

Use GET at https://celestialapi3.herokuapp.com/api/celestialbodies/ to get a list of all celestial bodies and their data.

USE GET at https://celestialapi3.herokuapp.com/api/celestialbodies/PLANET-NAME-HERE. to get the data for a specific celestial body.

USE POST at https://celestialapi3.herokuapp.com/api/celestialbodies/ to add a new celestial body to the database.
JSON body should have the following format: (still need to incorporate testing + appropriate error handling)

{
"name": "PLANET-NAME-HERE",
"distance_from_sun": DISTANCE-FROM-SUN-HERE,
"radius": RADIUS-HERE,
"length_of_day": LENGTH-OF-DAY-HERE,
"length_of_year": LENGTH-OF-YEAR-HERE
}

-   Planning to add a POST method to add a new celestial body to the database, a PUT method to update a celestial body's data, and a DELETE method to delete a celestial body from the database. Also hope to use place-holders in the SQL queries to prevent SQL injection.

Current celestial bodies - Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. :)

-   I hope to add more celestial bodies to the database in the future, and more data to the database for each celestial body.
-   Will also connect to client-side application to display the data in a more user-friendly format.
