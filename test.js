const db = require('./test_script');


module.exports = {
  run: db.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    db.query("SELECT first_name, last_name, birthdate FROM famous_people WHERE last_name = $1 OR first_name = $1", [name], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log(result.rows[0]);
      db.end();
    });
  });
}