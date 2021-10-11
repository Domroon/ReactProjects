const FindItem = () => {
  return (
    <article class="find-item uppercase">
      <h2>find item</h2>
      <form action="">
        <div class="number-in">
          <label for="">material number</label> <input type="text" />
        </div>
        <div class="name-in">
          <label for="">name</label>
          <input type="text" />
          <button className="btn search-btn">search</button>
        </div>
      </form>
    </article>
  )
}

export default FindItem
