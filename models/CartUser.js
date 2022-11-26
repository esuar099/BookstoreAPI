/*
Tatiana
*/

/*
Our save method will create a new cart instance for a user.  
*/
const db = require('../config/db');

class CartUser{
    constructor(user_id){
        this.user_id=user_id;
    }

    save(){

        let sql=`INSERT INTO cart_users(
            user_id
            )
            VALUES(
                '${this.user_id}'
            )
            `;            
    
            return db.execute(sql); 
    }
}

module.exports=CartUser;
