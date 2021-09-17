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
      <h1>Upcoming Fortnite Items ({data.data.length})</h1>
      {data.data.map((item) => {
        return (
          <div key={item.itemId} className={`item-container ${item.item.rarity}`}>
            <div className="item">
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
          </div>
        )
      })}
    </div>
  )
}

export default App
