/*
Tatiana
*/

const db = require('../config/db');

class CartItem{
    constructor(ISBN,cart_id){
        this.ISBN=ISBN;
        this.cart_id=cart_id;
    }

/*
Add a new book to shopping cart. 
*/
    save(){

        let sql=`INSERT INTO cart_items(
            ISBN,cart_id
            )
            VALUES(
                '${this.ISBN}', 
                '${this.cart_id}'
            )
            `;            
    
            return db.execute(sql); 
    }

    /*
    Delete book from shopping cart. 
    */
   
    static deleteBookFromCart(ISBN, cart_id){
        let sql=`DELETE FROM cart_items WHERE ISBN= ${ISBN} AND cart_id=${cart_id};`;

        return db.execute(sql);
    }

    static findAllBooks(cart_id){
        let sql=`SELECT books.title 
        FROM books 
        INNER JOIN cart_items
        ON cart_items.ISBN=books.ISBN
        WHERE cart_items.cart_id=${cart_id};`;

        return db.execute(sql);
    }
}

module.exports=CartItem;
