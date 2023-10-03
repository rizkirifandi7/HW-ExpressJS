const express = require("express");
const app = express();
const apiRouter = require("./route.js");
const port = 3000; 

// Middleware untuk parsing body JSON
app.use(express.json());

// Gunakan router API
app.use("/api", apiRouter);

app.listen(port, () => {
	console.log(`Aplikasi berjalan di port ${port}`);
});
