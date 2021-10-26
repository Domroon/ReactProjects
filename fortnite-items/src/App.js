import "./bootstrap.css"
import "./App.css"
import { useState, useEffect } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])

  const url = "https://fortnite-api.theapinetwork.com/upcoming/get"

  const fetchData = () => {
    setIsLoading(true)
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((resp) => {
        setData(resp)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="App">
        <h1>Error...</h1>
      </div>
    )
  }

  const searchOtherImage = () => {
    //use this in on error arrow func!
  }

  return (
    <div className="App">
      <h1 className="title">Upcoming Fortnite Items ({data.data.length})</h1>
      <section class="filter">
        <h2>Filter</h2>
        <form>
          <div className="backpack">
            <input type="checkbox" id="backpack" />
            <label>backpack</label>
          </div>
          <div className="loadingscreen">
            <input type="checkbox" id="loadingscreen" />
            <label>loadingscreen</label>
          </div>
          <div className="bundle">
            <input type="checkbox" id="bundle" />
            <label>bundle</label>
          </div>
          <div className="outfit">
            <input type="checkbox" id="outfit" />
            <label>outfit</label>
          </div>
          <div className="glider">
            <input type="checkbox" id="glider" />
            <label>glider</label>
          </div>
          <div className="pickaxe">
            <input type="checkbox" id="pickaxe" />
            <label>pickaxe</label>
          </div>
          <div className="emote">
            <input type="checkbox" id="emote" />
            <label>emote</label>
          </div>
          <div className="wrap">
            <input type="checkbox" id="wrap" />
            <label>wrap</label>
          </div>
          <div className="contrail">
            <input type="checkbox" id="contrail" />
            <label>contrail</label>
          </div>
          <div className="toy">
            <input type="checkbox" id="toy" />
            <label>toy</label>
          </div>
          <div className="spray">
            <input type="checkbox" id="spray" />
            <label>spray</label>
          </div>
          <div className="emoji">
            <input type="checkbox" id="emoji" />
            <label>emoji</label>
          </div>
          <div className="banner">
            <input type="checkbox" id="banner" />
            <label>banner</label>
          </div>
          <button>reset</button>
        </form>
      </section>
      <section className="items">
        {data.data.map((item) => {
          return (
            <div key={item.itemId} className={`item ${item.item.rarity}`}>
              <h4>{item.item.type}</h4>
              <h1>{item.item.name}</h1>
              <img
                src={item.item.images.icon}
                alt={item.item.name}
                // onError={(e) => {
                //   e.target.onerror = null
                //   e.target.src = `${item.item.images.featured}`
                // }}
              />
              <h2>{item.item.description}</h2>
              <h3>({item.item.rarity})</h3>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default App
