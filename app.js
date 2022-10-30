import express from 'express'

import { getAuthor, getAuthors, createAuthor, createCart, addBookToCart } from './database.js'

const app=express()

app.use(express.json())

app.listen(8080, ()=>{
    console.log('Server is running on port 8080')
  })

/*
app.get("/author", async (req, res)=>{
    const authors=await getAuthors()
    res.send(authors)
})

app.get("/author/:author_id", async (req, res)=>{
  const author_id=req.params.author_id
  const author=await getAuthor(author_id)
  res.send(author)
})

app.post("/author", async(req, res)=>{
  const {first_name, last_name, biography, publisher, author_id}=req.body
  const author=await createAuthor(first_name, last_name, biography, publisher, author_id)
  res.status(201).send(author)
})*/

/*
Create a shopping cart instance for user - post request. 
*/
app.post("/cart_users", async(req, res)=>{
  const {cart_id, user_id}=req.body
  const cart_users=await createCart(cart_id, user_id)
  res.status(201).send(cart_users)
})

/*
Update shopping cart with book - post request. 
*/
app.post("/cart_items", async(req, res)=>{
  const {ISBN, cart_id}=req.body
  const cart_items=await addBookToCart(ISBN, cart_id)
  res.status(201).send(cart_items)
})

/*
Retrieve the list of book(s) in the shopping cart - get request.
*/


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke. Please try again!')
  })
