import React from "react"

const Book = ({ img, title, author, job, children }) => {
  const item = "book"
  // const { img, title, author} = props  That can also destruct props

  //Events
  // atrribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert("Hello World")
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <Image img={img} />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4 style={{ color: "617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>{author}</h4>
      <p>{item}</p>
      <p>{6 + 6}</p>
      <p>{job}</p>
      <p>{children}</p>
      <button type="button" onClick={clickHandler}>
        Test
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  )
}

const Image = (props) => <img src={props.img} alt="" />

export default Book
//only one default export per file
