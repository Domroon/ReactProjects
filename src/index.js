import React from "react"
import ReactDom from "react-dom"
import "./index.css"

//setup vars
const firstBook = {
  id: 1,
  title: "Das Café am Rande der Welt",
  author: "John Strelecky",
  img: "https://images-eu.ssl-images-amazon.com/images/I/91r4uIYku9S._AC_UL200_SR200,200_.jpg",
}

const books = [
  {
    id: 2,
    title: "Zurück zu mir: Eine heilende Begegnung",
    author: "Laura Malina Seiler",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71-OYlG5WjL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "Rehragout-Rendezvous: Der elfte Fall",
    author: "Rita Falk",
    img: "https://images-eu.ssl-images-amazon.com/images/I/91f03Hzi8wL._AC_UL200_SR200,200_.jpg",
  },
]

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
          const { title, author, img, id } = book
          return <Book key={id} title={title} author={author} img={img} />
        })}
      </section>
    </>
  )
}

const Book = ({ img, title, author, job, children }) => {
  const item = "book"
  // const { img, title, author} = props  That can also destruct props

  return (
    <article className="book">
      <Image img={img} />
      <h1>{title}</h1>
      <h4 style={{ color: "617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>{author}</h4>
      <p>{item}</p>
      <p>{6 + 6}</p>
      <p>{job}</p>
      <p>{children}</p>
    </article>
  )
}

const Image = (props) => <img src={props.img} alt="" />

ReactDom.render(<BookList />, document.getElementById("root"))
