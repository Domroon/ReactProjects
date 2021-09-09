import React from "react"
import ReactDom from "react-dom"
import "./index.css"

//setup vars
const firstBook = {
  title: "Das Café am Rande der Welt",
  author: "John Strelecky",
  img: "https://images-eu.ssl-images-amazon.com/images/I/91r4uIYku9S._AC_UL200_SR200,200_.jpg",
}

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" number={22} />
      <Book number={22} />
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} />
    </section>
  )
}

const Book = ({ img, title, author, job }) => {
  const item = "book"

  return (
    <article className="book">
      <Image img={img} />
      <h1>{title}</h1>
      <h4 style={{ color: "617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>{author}</h4>
      <p>{item}</p>
      <p>{6 + 6}</p>
      <p>{job}</p>
    </article>
  )
}

const Image = (props) => <img src={props.img} alt="" />

ReactDom.render(<BookList />, document.getElementById("root"))
