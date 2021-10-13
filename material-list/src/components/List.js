import Item from "./Item"

const List = ({ items, removeItem, setIsEditing, setEditID, editItem }) => {
  return (
    <>
      <div class="column-names">
        <p>number</p>
        <p>material number</p>
        <div className="name-label inline-block">
          <p>name</p>
        </div>
        <p>edit/delete</p>
      </div>
      {items.map((item, index) => {
        console.log(item)
        const itemProps = {
          number: item.number,
          mat_number: item.mat_number,
          mat_name: item.mat_name,
          id: item.id,
        }
        return (
          <Item
            index={index}
            {...itemProps}
            removeItem={removeItem}
            setIsEditing={setIsEditing}
            setEditID={setEditID}
            editItem={editItem}
          />
        )
      })}
    </>
  )
}

export default List
