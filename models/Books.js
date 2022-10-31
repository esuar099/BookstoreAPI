const db = require('../config/db.js');

class Books {

    static findAllBooks() {
        //finds all books and sorts them by sales desc

		let sql = "SELECT * FROM books;";
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
	// static booksByGenre() {
    //     let sql = `SELECT * FROM author WHERE author_id = ${id};`;
	// 	let sql = "SELECT * FROM books ORDER BY rating ASC;";
	// 	return db.execute(sql);
	// }
}


module.exports = Books;