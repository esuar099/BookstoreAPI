const express = require("express");
const db = require('../config/db.js');

class Books {
	constructor(title, copies_sold, rating, author_id, genre, ISBN, description, price, publisher, year_published) {
		this.title = title;
		this.copies_sold = copies_sold;
		this.rating = rating;
		this.author_id = author_id;
		this.genre = genre;
		this.ISBN = ISBN;
		this.description = description;
		this.price = price;
		this.publisher = publisher;
		this.year_published = year_published;
	}

	async save() {
		let sql = `
		INSERT INTO books( 
		title,
		copies_sold, 
		rating, 
		author_id,
		genre,
		ISBN,
		description,
		price,
		publisher,
		year_published
		) 
		VALUES(
		'${this.title}', 
		'${this.copies_sold}', 
		'${this.rating}',
		'${this.author_id}',
		'${this.genre}',
		'${this.ISBN}',  
		'${this.description}', 
		'${this.price}', 
		'${this.publisher}',
		'${this.year_published}'
		)
		`; 

		return db.execute(sql);
	}

	static findBookByISBN(id) {
        //finds books by ISBN
		let sql = `SELECT * FROM books WHERE ISBN = "${id}";`
		return db.execute(sql);
	}

	//FIX
	static findBookByAuthorID(id) {
        //finds books by author
		let sql = `SELECT * FROM books WHERE author_id = "${id}";`
		return db.execute(sql);
	}

	// - Miguel - 
	static findAllBooks() {
        //finds all books and sorts them by sales desc
		let sql = "SELECT * FROM books;";
		return db.execute(sql);
	}
	static booksTopSales() {
        //finds all books and sorts them by ratings desc
		let sql = "SELECT * FROM books ORDER BY copies_sold DESC LIMIT 10;";
		return db.execute(sql);
	}
	static booksByOffset(oset, lim) {
        //finds all books and sorts them by ratings desc
		let sql = `SELECT title, copies_sold FROM books ORDER BY copies_sold DESC LIMIT ${lim} OFFSET ${oset};`;
		return db.execute(sql);
	}
	static booksByRating(rate) {
        //displays books from a specified threshold
		let sql = `SELECT title, rating FROM books WHERE rating >= ${rate} ORDER BY rating DESC`;
		return db.execute(sql);
	}
	static booksByGenre(genre) {
        let sql = `SELECT * FROM books WHERE genre IN ('${genre}')`;
		return db.execute(sql);
	}
}



module.exports = Books;