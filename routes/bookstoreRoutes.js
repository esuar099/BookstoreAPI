const express = require('express');
const postControllers = require('../controllers/postControllers');
const router = express.Router();

// Author routes 
router
    .route("/author")
    .get(postControllers.findAllAuthors)
    .post(postControllers.createNewAuthor);
router
    .route("/author/:id")
    .get(postControllers.findAuthorByID);

// Books routes
// Eduardo
router
    .route("/books")
    .get(postControllers.findAllBooks)
    .post(postControllers.createNewBook);

router
    .route("/books/isbn/:id")
    .get(postControllers.findBookByISBN);

router
    .route("/books/author/:id")
    .get(postControllers.findBookByAuthorID);

// Miguel
router
    .route("/books")
    .get(postControllers.findAllBooks);
router
    .route("/books/top10")
    .get(postControllers.booksTopSales);
router
  .route("/books/oset/")
  .get(postControllers.booksByOffset);
router
  .route("/books/rating/")
  .get(postControllers.booksByRating);
router
  .route("/books/genre/")
  .get(postControllers.booksByGenre);

module.exports = router;
