// Import pool dari file db.js
const pool = require("./db.js");

// Fungsi untuk mendapatkan semua data aktor
const getAllActors = async () => {
	try {
		const query = "SELECT * FROM actor";
		const { rows } = await pool.query(query);
		return rows;
	} catch (error) {
		console.error("Error saat mengambil data aktor:", error);
		throw error;
	}
};

// Fungsi untuk mendapatkan semua data film
const getAllFilms = async () => {
	try {
		const query = "SELECT * FROM film";
		const { rows } = await pool.query(query);
		return rows;
	} catch (error) {
		console.error("Error saat mengambil data film:", error);
		throw error;
	}
};

// Fungsi untuk mendapatkan film berdasarkan ID
const getFilmById = async (id) => {
	try {
		const query = "SELECT * FROM film WHERE film_id = $1";
		const { rows } = await pool.query(query, [id]);
		return rows[0];
	} catch (error) {
		console.error("Error saat mengambil data film berdasarkan ID:", error);
		throw error;
	}
};

// Fungsi untuk mendapatkan semua kategori
const getAllCategories = async () => {
	try {
		const query = "SELECT * FROM category";
		const { rows } = await pool.query(query);
		return rows;
	} catch (error) {
		console.error("Error saat mengambil data kategori:", error);
		throw error;
	}
};

// Fungsi untuk mendapatkan film berdasarkan kategori
const getFilmsByCategoryName = async (categoryName) => {
	try {
		const query = `
      SELECT f.* FROM film f
      INNER JOIN film_category fc ON f.film_id = fc.film_id
      INNER JOIN category c ON fc.category_id = c.category_id
      WHERE c.name = $1
    `;
		const { rows } = await pool.query(query, [categoryName]);
		return rows;
	} catch (error) {
		console.error("Error saat mengambil data film berdasarkan kategori:", error);
		throw error;
	}
};

module.exports = {
	getAllFilms,
	getFilmById,
	getAllCategories,
	getFilmsByCategoryName,
	getAllActors,
};
