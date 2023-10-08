const express = require("express");
const router = express.Router();
const { getAllFilms, getFilmById, getAllCategories, getFilmsByCategoryName, getAllActors } = require("./query.js");

// Route untuk menampilkan data seluruh list actor
router.get("/actor", async (req, res) => {
	const actor = await getAllActors();
	res.json(actor);
});

// Route untuk menampilkan data seluruh list film
router.get("/film", async (req, res) => {
	const films = await getAllFilms();
	res.json(films);
});

// Route untuk menampilkan data film tertentu berdasarkan id
router.get("/film/:id", async (req, res) => {
	const filmId = req.params.id;
	const film = await getFilmById(filmId);
	if (film) {
		res.json(film);
	} else {
		res.status(404).json({ message: "Film tidak ditemukan" });
	}
});

// Route untuk menampilkan data list category
router.get("/categories", async (req, res) => {
	const categories = await getAllCategories();
	res.json(categories);
});

// Route untuk menampilkan data list fil berdasarkan category
router.get("/category/:categoryName", async (req, res) => {
	const categoryName = req.params.categoryName;
	const films = await getFilmsByCategoryName(categoryName);
	res.json(films);
});

module.exports = router;
