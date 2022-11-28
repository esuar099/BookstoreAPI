const Author = require('../models/Author');
const Books = require('../models/Books');

exports.findAllAuthors = async (req, res, next) => {
	try {
		const [author, _] = await Author.findAllAuthors();

		res.status(200).json({ count: author.length, author});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.createNewAuthor = async (req, res, next) => {
	try {
		let {first_name, last_name, biography, publisher, author_id} = req.body;
		let author = new Author(first_name, last_name, biography, publisher, author_id);
		author = await author.save();
		console.log(author);

		res.status(201).json({ message: "Author added" });
	} catch (error) {
		console.log(error);
		next(error);
	}
	
};

exports.findAuthorByID = async (req, res, next) => {
	
	try {
		let authorID = req.params.id;
		let [author, _] = await Author.findByID(authorID);

		res.status(200).json({author});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.findBookByISBN = async (req, res, next) => {
	//finds books by ISBN
	try {
		let bookID = req.params.id;
		const [books, _] = await Books.findBookByISBN(bookID);

		res.status(200).json({count: books.length, books});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.findBookByAuthorID = async (req, res, next) => {
	//finds books by ISBN
	try {
		let booksAuthor = req.params.id;
		const [books, _] = await Books.findBookByAuthorID(booksAuthor);

		res.status(200).json({count: books.length, books});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.createNewBook = async (req, res, next) => {
	try {
		let {title, copies_sold, rating, author_id, genre, ISBN, description, price, publisher, year_published} = req.body;
		let books = new Books(title, copies_sold, rating, author_id, genre, ISBN, description, price, publisher, year_published);
		books = await books.save();
		console.log(books);

		res.status(201).json({ message: "Book added" });
	} catch (error) {
		console.log(error);
		next(error);
	}
};

	// - Miguel
exports.findAllBooks = async (req, res, next) => {
	//find all books
	try {
		const [books, _] = await Books.findAllBooks();
		res.status(200).json({ count: books.length, books});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.booksTopSales = async (req, res, next) => {
	//Top 10 books by sales
	try {
		const [books, _] = await Books.booksTopSales();
		res.status(200).json({ count: books.length, books});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.booksByOffset = async (req, res, next) => {
	//Display specified number of books from a specified offset
	try {
		let oset = req.query.oset;
		let lim = req.query.lim;
		let [books, _] = await Books.booksByOffset(oset, lim);
		res.status(200).json({ count: books.length, books});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.booksByRating = async (req, res, next) => {
	//Display books of specified rating and higher
	try {
		let rate = req.query.rate;
		let [books, _] = await Books.booksByRating(rate);
		res.status(200).json({ count: books.length, books});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

exports.booksByGenre = async (req, res, next) => {
	//Display books of specified genre
	try {
		let genre = req.query.genre;
		let [books, _] = await Books.booksByGenre(genre);
		res.status(200).json({ count: books.length, books});
	} catch (error) {
		console.log(error);
		next(error);
	}
};