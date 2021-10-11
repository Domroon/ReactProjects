import Item from "./Item"

const List = ({ items, removeItem }) => {
  return (
    <>
      <div class="column-names">
        <p>number</p>
        <p class="empty">MI</p>
        <p>material number</p>
        <div className="name-label inline-block">
          <p>name</p>
        </div>
        <p>edit/delete</p>
      </div>
      {items.map((item, index) => {
        const itemProps = {
          number: item.number,
          mat_number: item.mat_number,
          mat_name: item.mat_name,
          id: item.id,
        }
        return <Item index={index} {...itemProps} removeItem={removeItem} />
      })}
    </>
  )
}

export default List
