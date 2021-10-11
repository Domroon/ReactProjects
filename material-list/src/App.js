import "./App.css"
import { useState } from "react"
import FindItem from "./components/FindItem"
import NewMaterial from "./components/NewMaterial"
import List from "./components/List"
import Alert from "./components/Alert"
import { materials } from "./data/materials"

function App() {
  const [items, setItems] = useState(materials)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" })

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }

  return (
    <div className="App">
      <div className="alert-container">
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} items={items} />
        )}
      </div>
      <section class="list">
        <NewMaterial setAlert={setAlert} showAlert={showAlert} />
        <FindItem />
        <List items={items} />
      </section>
    </div>
  )
}

export default App
