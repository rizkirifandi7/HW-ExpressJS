// Module-module
const express = require("express");
const app = express();
const morgan = require("morgan");
const apiRouter = require("./route.js");
const port = 3000;

//  parsing body JSON
app.use(express.json());

app.use(morgan("combined"));

// Gunakan router API
app.use("/api", apiRouter);

// Lokasi Port
app.listen(port, () => {
	console.log(`Aplikasi berjalan di port ${port}`);
});
