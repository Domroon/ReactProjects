const FindItem = ({
  findMatNum,
  setFindMatNum,
  findMatName,
  setFindMatName,
}) => {
  const handleSearch = (e) => {
    e.preventDefault()
    console.log(findMatNum, findMatName)
  }

  return (
    <article class="find-item uppercase">
      <h2>find item</h2>
      <form action="">
        <div class="number-in">
          <label for="">material number</label>
          <input
            type="text"
            placeholder="e.g. 123456"
            className="input"
            value={findMatNum}
            onChange={(e) => {
              setFindMatNum(e.target.value)
            }}
          />
        </div>
        <div class="name-in">
          <label for="">name</label>
          <input
            type="text"
            placeholder="e.g. onion"
            className="input"
            value={findMatName}
            onChange={(e) => {
              setFindMatName(e.target.value)
            }}
          />
          <button
            className="btn search-btn"
            type="submit"
            onClick={handleSearch}
          >
            search
          </button>
        </div>
      </form>
    </article>
  )
}

export default FindItem
