const ListNumbers = (props) => {
  const listItems = props.numbers.map((number) => <li key={number.toString()}>{number}</li>)
  return (
    <ul>{listItems}</ul>
  )
}

export default ListNumbers