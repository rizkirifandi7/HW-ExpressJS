const pool = require("./db.js");

const getAllActor = async () => {
	const query = "SELECT * FROM actor";
	const { rows } = await pool.query(query);
	return rows;
};

const getAllFilms = async () => {
	const query = "SELECT * FROM film";
	const { rows } = await pool.query(query);
	return rows;
};

const getFilmById = async (id) => {
	const query = "SELECT * FROM film WHERE film_id = $1";
	const { rows } = await pool.query(query, [id]);
	return rows[0];
};

const getAllCategories = async () => {
	const query = "SELECT * FROM category";
	const { rows } = await pool.query(query);
	return rows;
};

const getFilmsByCategoryName = async (categoryName) => {
	const query = `
	  SELECT f.* FROM film f
	  INNER JOIN film_category fc ON f.film_id = fc.film_id
	  INNER JOIN category c ON fc.category_id = c.category_id
	  WHERE c.name = $1
	`;
	const { rows } = await pool.query(query, [categoryName]);
	return rows;
};

module.exports = {
	getAllFilms,
	getFilmById,
	getAllCategories,
	getFilmsByCategoryName,
	getAllActor,
};
