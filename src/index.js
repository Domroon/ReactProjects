import React from "react"
import ReactDom from "react-dom"
import "./index.css"

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  )
}

const Book = () => {
  const title = "Das Café am Rande der Welt"
  const author = "John Strelecky"

  return (
    <article className="book">
      <Image />
      <h1>{title.toUpperCase()}</h1>
      <h4 style={{ color: "617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>{author}</h4>
      {6 + 6}
    </article>
  )
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/91r4uIYku9S._AC_UL200_SR200,200_.jpg" alt="" />

ReactDom.render(<BookList />, document.getElementById("root"))
