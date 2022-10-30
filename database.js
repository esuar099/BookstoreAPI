import mysql from 'mysql2'

/*
the following loads in our environment variables stored in the .env file:
*/
import dotenv from 'dotenv'
dotenv.config()

//assign pool connection parameters 
//pool is where database connections are stored.
const pool=mysql.createPool({//the following params are environment variables - values stored in .env file - anyone who runs this application on their computer will need their own .env file
    host:process.env.MYSQL_HOST, //"localhost" - resolves to 127.0.0.1
    user:process.env.MYSQL_USER,//"root"
    password:process.env.MYSQL_PASSWORD,//"IloveRita7!?2"
    database:process.env.MYSQL_DATABASE//bookstore 
}).promise()//promise() allows us to use promise api verison of mysql rather than having to use callback functions

//now we can use pool to query data from mysql.
//sample query - get all authors in author table.
export async function getAuthors(){
    const [rows]=await pool.query("SELECT * FROM author") //results array contains two sub-arrays... relevant data and metadata. [rows] ensures that we get the first array (the data) and store it in a variable called rows.
    return rows //returns value implicitly wrapped in a promise.
}
/*
const authors=await getAuthors()
console.log(authors)*/

//get a single author as determined by user-entered id.
export async function getAuthor(author_id){
    const [rows]=await pool.query(`SELECT * FROM author WHERE author_id=?`, [author_id]) 
    return rows[0] //always will have a single object returned.
}
/*const author=await getAuthor(2)
console.log(author)*/

//insert a new row into the author table. 

export async function createAuthor(first_name, last_name, biography, publisher, author_id){
    const result=await pool.query(`INSERT INTO author(first_name, last_name, biography, publisher, author_id) VALUES (?,?,?,?,?)`, [first_name, last_name, biography, publisher, author_id])
    return result
}
/*const r=await createAuthor('test','test','test','test',null) //null for auto-increment author id column.
console.log(r)*/

//insert a new row into the cart_users table - what this essentially does is assign a cart_id to a user, thus creating a shopping cart instance.
export async function createCart(cart_id, user_id){
    const result=await pool.query(`INSERT INTO cart_users(cart_id, user_id) VALUES (?,?)`, [cart_id, user_id])
    return result
}

/*const result=await createCart(null, 2) //null for auto-increment author id column.
console.log(result)*/

//insert a new row into the cart_users table - what this essentially does is assign a cart_id to a user, thus creating a shopping cart instance.
export async function addBookToCart(ISBN, cart_id){
    const result=await pool.query(`INSERT INTO cart_items(ISBN, cart_id) VALUES (?,?)`, [ISBN, cart_id])
    return result
}

const result=await addBookToCart('4-567-8', 1) //null for auto-increment author id column.
console.log(result)
