import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"

const NewMaterial = ({
  number,
  setNumber,
  matName,
  setMatName,
  matNumber,
  setMatNumber,
  showAlert,
  items,
  setItems,
  isEditing,
  setIsEditing,
  editID,
}) => {
  const handleAdd = (e) => {
    e.preventDefault()
    if (!matName || !matNumber) {
      showAlert(true, "danger", "please enter name and/or material number")
      // } else if (!number) {
      //   showAlert(true, "danger", "please enter how much you would like to add")
    } else if (isEditing) {
      const editItem = items.find((item) => item.id === editID)
      editItem.number = number
      editItem.mat_number = matNumber
      editItem.matName = matName
      // console.log(editItem)
      setItems(
        items.map((item) => {
          if (item.id === editID) {
            return {
              ...item,
              number: number,
              mat_number: matNumber,
              mat_name: matName,
            }
          }
          return item
        })
      )
      setNumber("")
      setMatNumber("")
      setMatName("")
      setIsEditing(false)
    } else {
      const id = uuidv4()
      setItems([
        ...items,
        { number: number, mat_number: matNumber, mat_name: matName, id: id },
      ])
      setNumber("")
      setMatNumber("")
      setMatName("")
      showAlert(true, "success", "sucessfully add the item")
    }
  }

  return (
    <article class={`new-mat uppercase ${isEditing && "editing"}`}>
      <h2>{isEditing ? "edit" : "add"} item</h2>
      <form action="">
        <div className="number-in">
          <label for="">number</label>
          <input
            type="text"
            className="input num-input"
            placeholder="0"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value)
            }}
          />
          <div class="btn-container">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                setNumber((number) => number + 1)
              }}
            >
              <AiOutlinePlus className="icon" />
            </button>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                if (number <= 0) {
                  setNumber(0)
                } else {
                  setNumber((number) => number - 1)
                }
              }}
            >
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
            {isEditing ? "edit" : "add"}
          </button>
        </div>
      </form>
    </article>
  )
}

export default NewMaterial
