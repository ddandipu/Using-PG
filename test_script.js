const pg = require("pg");
const settings = require("./settings"); // settings.json
var args = process.argv.slice(2);

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT first_name, last_name, birthdate FROM famous_people WHERE last_name = $1 OR first_name = $1", [args[0]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0]);
    client.end();
  });
});


// SELECT first_name, last_name, birthdate
// FROM famous_people
// WHERE first_name = 'args[0]'
// OR last_name = 'args[0]'