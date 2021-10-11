import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"
import { BiTrashAlt } from "react-icons/bi"

const Item = ({ index, number, mat_number, mat_name }) => {
  return (
    <div class={`row ${index % 2 === 0 ? "light-row" : "dark-row"}`}>
      <div className="number inline-block">
        <p>{number}</p>
      </div>
      {/* <div class="btn-container">
        <button>
          <AiOutlinePlus className="icon" />
        </button>
        <button>
          <AiOutlineMinus className="icon" />
        </button>
      </div> */}
      <div className="mat-number inline-block">
        <p>{mat_number}</p>
      </div>
      <div className="mat-name inline-block">
        <p>{mat_name}</p>
      </div>
      <div className="edit-delete-container inline-block">
        <div className="btn-container">
          <div className="btn edit-btn inline-block">
            <button className="icon">
              <FiEdit2 />
            </button>
          </div>
          <div className="btn-container">
            <button className="icon">
              <BiTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item