import { TableBody } from './TableBody'
import { TableHead } from './TableHead'

const Table = (props) => {
  const { characterData, removeCharacter } = props
  return (
    <table className="table-student">
      {/*Passing data to Table Body*/}
      <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      <TableHead/>
    </table>
  )
}
export default Table