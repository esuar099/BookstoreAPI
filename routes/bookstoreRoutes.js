const express = require('express');
const postControllers = require('../controllers/postControllers');
const router = express.Router();

// @route GET && POST - /post/
router
    .route("/author")
    .get(postControllers.findAllAuthors)
    .post(postControllers.createNewAuthor);

router
    .route("/author/:id")
    .get(postControllers.findAuthorByID);
router
    .route("/books/sales")
    .get(postControllers.findAllBooks);
router
    .route("/books/sales/top10")
    .get(postControllers.bookTopSales);
router
    .route("/books")
    .get(postControllers.findAllBooks)
    .post(postControllers.createNewBook);
    
router
    .route("/books/sales/desc")
    .get(postControllers.bookSalesDesc);
router
    .route("/books/sales/asc")
   .get(postControllers.bookSalesAsc);
router
   .route("/books/ratings/desc")
   .get(postControllers.bookRatingDesc);
router
   .route("/books/ratings/asc")
  .get(postControllers.bookRatingAsc);

    
module.exports = router;
