# BookstoreAPI

The Bookstore API is designed to provide a comprehensive set of features for managing books, user profiles, shopping carts, book details, ratings and comments, and wish lists. 

## Book Browsing and Sorting
Retrieve a List of Books by Genre
Retrieve a List of Top Sellers (Top 10 books that have sold the most copies)
Retrieve a List of Books for a particular rating and higher
Retrieve a List of X Books at a time where X is an integer from a given position in the overall recordset.

## Profile Management
Create a User with username(email), password, and optional fields (name, email address, home address)
Retrieve a User Object and its fields by their username
Update the user and any of their fields except for email
Create Credit Card that belongs to a User and Retrieve a list of cards for that user

## Book Details
An administrator must be able to create a book with the book ISBN, book name, book description, price, author, genre, publisher, year published, and copies sold.
Retrieve a book’s details by the ISBN
An administrator must be able to create an author with first name, last name, biography, and publisher
Retrieve a list of books associated with an author

## Book Rating
Create a rating for a book by a user on a 5-star scale with a datestamp
Retrieve a list of ratings sorted by highest rating
Retrieve the average rating for a book


## How to Run This Project
1. Clone Repo to local machine git clone https://github.com/esuar099/BookstoreAPI
2. Navigate into the project folder in the terminal and run npm install
3. Add your own database details inside the .env file
4. Once all is installed, run the command 'npm run dev' in the console to start the development server

Install the following packages
npm install express
npm install dotenv
npm install mysql2
