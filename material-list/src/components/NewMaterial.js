import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

const NewMaterial = ({ setAlert, showAlert }) => {
  const [matName, setMatName] = useState()
  const [matNumber, setMatNumber] = useState()

  const handleAdd = (e) => {
    e.preventDefault()
    console.log("hello")
  }

  return (
    <article class="new-mat uppercase">
      <h2>add item</h2>
      <form action="">
        <div class="number-in">
          <label for="">number</label>
          <input
            type="text"
            className="input num-input"
            placeholder="0"
            value={matNumber}
            onChange={(e) => {
              setMatNumber(e.target.value)
            }}
          />
          <div class="btn-container">
            <button>
              <AiOutlinePlus className="icon" />
            </button>
            <button>
              <AiOutlineMinus className="icon" />
            </button>
          </div>
        </div>
        <div class="number-in">
          <label for="">material number</label>
          <input
            type="text"
            className="input"
            placeholder="e.g. 123456"
            value={matNumber}
            onChange={(e) => {
              setMatNumber(e.target.value)
            }}
          />
        </div>
        <div class="name-in">
          <label for="">name</label>
          <input
            type="text"
            className="input"
            placeholder="eg. onion"
            value={matName}
            onChange={(e) => setMatName(e.target.value)}
          />
          <button type="submit" className="btn add-btn" onClick={handleAdd}>
            add
          </button>
        </div>
      </form>
    </article>
  )
}

export default NewMaterial
