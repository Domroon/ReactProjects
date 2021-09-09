import React from "react"
import ReactDom from "react-dom"

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <>
      <Person />
      <p>Hey whats up?!!!!!</p>
      <Message />
    </>
  )
}

const Person = () => <h1>Hello World!</h1>
const Message = () => <p>I'm fine and you?</p>

ReactDom.render(<Greeting />, document.getElementById("root"))
