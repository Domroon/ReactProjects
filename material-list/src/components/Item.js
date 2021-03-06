import { useState, useEffect } from "react"
import { FiEdit2 } from "react-icons/fi"
import { BiTrashAlt } from "react-icons/bi"

const Item = ({
  index,
  number,
  mat_number,
  mat_name,
  id,
  removeItem,
  setIsEditing,
  setEditID,
  editItem,
  findMatNum,
  findMatName,
  items,
}) => {
  const [found, setFound] = useState(false)

  const findItem = () => {
    items.find(() => {
      if (mat_number === parseInt(findMatNum) || mat_name === findMatName) {
        setFound(true)
      } else {
        setFound(false)
      }
    })
  }

  useEffect(() => {
    findItem()
  }, [findMatNum, findMatName])

  return (
    <div
      key={id}
      class={`row ${index % 2 === 0 ? "light-row" : "dark-row"} ${
        found && "found"
      }`}
    >
      <div className="number inline-block">
        <p>{number}</p>
      </div>
      <div className="mat-number inline-block">
        <p>{mat_number}</p>
      </div>
      <div className="mat-name inline-block">
        <p>{mat_name}</p>
      </div>
      <div className="edit-delete-container inline-block">
        <div className="btn-container">
          <div className="btn edit-btn inline-block">
            <button
              className="icon"
              type="submit"
              onClick={() => {
                setEditID(id)
                editItem(id)
              }}
            >
              <FiEdit2 />
            </button>
          </div>
          <div className="btn-container">
            <button
              className="icon"
              onClick={() => {
                removeItem(id)
              }}
            >
              <BiTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
