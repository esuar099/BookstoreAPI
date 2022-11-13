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

    static findAllBooks() {
        //finds all books and sorts them by sales desc
		let sql = "SELECT * FROM books;";
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

	static bookSalesDesc() {
        //finds all books and sorts them by sales desc
		let sql = "SELECT * FROM books ORDER BY copies_sold DESC;";
		return db.execute(sql);
	}
    static bookSalesAsc() {
        //finds all books and sorts them by sales asc
		let sql = "SELECT * FROM books ORDER BY copies_sold ASC;";
		return db.execute(sql);
	}

	static bookRatingAsc() {
        //get book list by rating asc
		let sql = "SELECT * FROM books ORDER BY rating ASC;";
		return db.execute(sql);
	}
    static bookRatingDesc() {
        //finds all books and sorts them by ratings desc
		let sql = "SELECT * FROM books ORDER BY rating DESC;";
		return db.execute(sql);
	}
	static bookTopSales() {
        //finds all books and sorts them by ratings desc
		let sql = "SELECT * FROM books ORDER BY copies_sold DESC LIMIT 10;";
		return db.execute(sql);
	}
	// static booksByGenre() {
    //     let sql = `SELECT * FROM author WHERE author_id = ${id};`;
	// 	let sql = "SELECT * FROM books ORDER BY rating ASC;";
	// 	return db.execute(sql);
	// }
}


module.exports = Books;