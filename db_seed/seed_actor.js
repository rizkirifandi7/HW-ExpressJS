var pool = require("../db.js");
var fs = require("fs");

const seedQuery = fs.readFileSync("db_seed/seed_actor.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
	console.log(err);
	console.log("Seeding Berhasil");
	pool.end();
});
