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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/91r4uIYku9S._AC_UL200_SR200,200_.jpg" alt="" />
const Title = () => <h1>Das Café am Rande der Welt</h1>
const Author = () => <h4 style={{ color: "617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>John Strelecky</h4>

ReactDom.render(<BookList />, document.getElementById("root"))
