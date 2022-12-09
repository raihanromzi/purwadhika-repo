export const TableBody = (props) => {
  // Loop through character data (Array of Object)
  const rows = props.characterData.map((row, index) => {
    return (
      // Always add key when making list in react, for index each row -> If we want to manipulate it
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => {
            props.removeCharacter(index)
          }}>X
          </button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}