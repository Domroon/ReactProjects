import "./App.css"
import { useState } from "react"
import FindItem from "./components/FindItem"
import NewMaterial from "./components/NewMaterial"
import List from "./components/List"
import Alert from "./components/Alert"
import { materials } from "./data/materials"

function App() {
  const [number, setNumber] = useState(0)
  const [matName, setMatName] = useState("")
  const [matNumber, setMatNumber] = useState("")

  const [items, setItems] = useState(materials)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" })
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState()

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }

  const removeItem = (id) => {
    // console.log(id)
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const editItem = (id) => {
    const item = items.find((item) => item.id === id)
    setIsEditing(true)
    setNumber(item.number)
    setMatNumber(item.mat_number)
    setMatName(item.mat_name)
  }

  return (
    <div className="App">
      <div className="alert-container">
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} items={items} />
        )}
      </div>
      <section class="list">
        <NewMaterial
          number={number}
          setNumber={setNumber}
          matName={matName}
          setMatName={setMatName}
          matNumber={matNumber}
          setMatNumber={setMatNumber}
          showAlert={showAlert}
          items={items}
          setItems={setItems}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editID={editID}
        />
        <FindItem />
        <List
          items={items}
          removeItem={removeItem}
          setIsEditing={setIsEditing}
          setEditID={setEditID}
          editItem={editItem}
        />
      </section>
    </div>
  )
}

export default App
