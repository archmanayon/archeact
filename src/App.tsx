import { MouseEvent, useReducer, useState } from 'react'

import ListOfItems from './grocery/ListOfItems'
import Item from './grocery/Item'
import Increment from './component/Increment'
import Item2 from './grocery/Item2'
import { FieldValues } from 'react-hook-form'
import Counter from './component/Counter'
import Tasks from './component/Tasks'
import TasksContext from './context/taskContext'
import TaskReducer from './reducers/TaskReducer'
import TaskProvider from './StateManagement/TaskProvider'

function App() {
  const [list, setList] = useState([
    { id: 0, itemName: '', quantity: 0, price: 0, totalAmount: 0, group: '' },
  ])

  const [category, SetCategory] = useState(['Weapon', 'Food', 'others'])

  const onAdd = (item: FieldValues) =>
    setList([
      ...list,
      {
        id: list.length,
        itemName: item.itemName,
        quantity: item.quantity,
        price: Number(item.price),
        totalAmount: Number(item.price) * Number(item.quantity),
        group: item.group,
      },
    ])

  return (
    <div className="App">
      <div>
        {/* <Item onAdd = {onAdd}/> */}
        <Item2 category={category} onAdd={onAdd} />
        <ListOfItems
          category={category}
          list={list.filter((item) => item.id !== 0)}
          handleDelete={(selectId) =>
            setList(list.filter((item) => item.id !== selectId))
          }
        />
      </div>

      <TaskProvider>
        <div>
          <div className="">
            <Counter />
          </div>
          <div>
            <Tasks />
          </div>
        </div>
      </TaskProvider>
    </div>
  )
}

export default App
