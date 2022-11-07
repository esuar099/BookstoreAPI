const db = require('../config/db.js');

class Author {
	constructor(first_name, last_name, biography, publisher) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.biography = biography;
		this.publisher = publisher;
	}

	async save() {
		//this is to get the date but im not using it atm.
		// let d = new Date();
		// let yyyy = d.getFullYear();
		// let mm = d.getMonth() + 1;
		// let dd = d.getDate();

		// let createdAtDate = '${mm}-${dd}-${yyyy}';

		let sql = `INSERT INTO author(first_name, last_name, biography, publisher) VALUES('${this.first_name}', '${this.last_name}', '${this.biography}', "${this.publisher}")`; 
		const [newAuthor, _] = await db.execute(sql);
		return newAuthor;
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

