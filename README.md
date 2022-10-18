
## Completion Overview

To complete this techtest I created a server using Node.js and Express.js. The server has two routes `'/set'` and `'/get'` and upon requests to each reads the request.query and either saves (`'/set'`) the data to a locally declared variable (`let keyValueData`) or returns (`'/get'`) said variable.

UPDATED:
Adding a database, I decided to go with PostGreSQL. I added a migration file that would create a PostGresQL database called `database-server-test` and populate it with a table called `keyvaluepairs`. I then simply replaced the methods I built out to compelte the initial task with a `queries.js` file. This contained query actions that complete the brief and return either table results or messages in JSON.


The original brief can be seen below...

# Database server tech test

Today we will practice a tech test to demonstrate your understanding of web technologies. This is an actual tech test that was given to one of our coaches when they applied for a dev role.

Bear in mind that most tech tests do not have a set timeframe. Although we do have a "soft" time limit, imposed mainly by the structure of the week, we are not expecting you to finish within the day - so take your time and focus on writing the best code you can produce.

## The brief

You receive a message from a prospective employer:

"Before your interview, write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at `somekey`. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

Create a new git repository and write code to fulfil the brief to the best of your ability. We will be looking for clean, well tested code in your choice of technology. In addition, the last sentence of the brief implies that you should consider how the code could easily be extended to add an as-yet-unknown data store.

If you still have time at the end of the day, you can extend the code by adding a data store of your choice.
