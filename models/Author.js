const db = require('../config/db.js');

class Author {
	constructor(first_name, last_name, biography, publisher, author_id) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.biography = biography;
		this.publisher = publisher;
		this.author_id = author_id;
	}

	async save() {
		let sql = `
		INSERT INTO author(
		first_name, 
		last_name, 
		biography, 
		publisher,
		author_id
		) 
		VALUES(
		'${this.first_name}', 
		'${this.last_name}', 
		'${this.biography}', 
		'${this.publisher}',
		'${this.author_id}'
		)
		`; 

		return db.execute(sql);
	}

	static findAllAuthors() {
		let sql = "SELECT * FROM author;";
		return db.execute(sql);
	}

	static findAuthorByID(id) {
		let sql = `SELECT * FROM author WHERE author_id = ${id};`;
		return db.execute(sql);
	}
}

module.exports = Author;

