import React from "react"
import ReactDom from "react-dom"

//CSS
import "./Basics/index.css"

import { books } from "./Basics/books"
import Book from "./Basics/Book" //You can rename a default export however you want e.g. "Specific Book"

//setup vars
const firstBook = {
  id: 1,
  title: "Das Café am Rande der Welt",
  author: "John Strelecky",
  img: "https://images-eu.ssl-images-amazon.com/images/I/91r4uIYku9S._AC_UL200_SR200,200_.jpg",
}

const names = ["john", "peter", "susan"]
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})

function BookList() {
  return (
    <>
      <section className="booklist">
        <p>{names}</p>
        <div>{newNames}</div>

        <Book job="developer" number={22} />
        <Book number={22}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sed at iure aut officiis eligendi nobis ex ad nesciunt autem!</p>
        </Book>
        <Book key={firstBook.id} title={firstBook.title} author={firstBook.author} img={firstBook.img} />
      </section>
      <section className="booklist">
        {books.map((book) => {
          //const { title, author, img, id } = book
          return <Book {...book} />
        })}
      </section>
    </>
  )
}

ReactDom.render(<BookList />, document.getElementById("root"))
