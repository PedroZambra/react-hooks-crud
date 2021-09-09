import { useState } from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';
import AddForm from './components/AddForm';
import Task from './components/Task';
import UpdateForm from './components/UpdateForm';

const taskBase = {
  id: '',
  task: '',
  priority: ''
}

function App() {
  const [task, setTask] = useState(taskBase)
  const [taskList, setTaskList] = useState([])
  const [showUpdate, setShowUpdate] = useState(false)
  const [idToUpdate, setIdToUpdate] = useState(-1)
  const [update, setUpdate] = useState(taskBase)

  const handleInputTask = evt => {
    let id = uuidv4()
    setTask({...task, id, [evt.target.name] : evt.target.value})
  }

  const handleSubmitAdd = evt => {
    evt.preventDefault()
    setTaskList([...taskList, task])
    setTask(taskBase)
  }

  const handleDelete = id => { 
    setTaskList(taskList.filter(task => task.id !== id))
  }

  const handlePanelUpdate = id => {
    setIdToUpdate(id)
    setShowUpdate(true)
  }

  const handleInputUpdate = evt => {
    let id = evt.target.dataset.id
    setUpdate({...update, id, [evt.target.name] : evt.target.value})
  }

  const handleChange = evt => {
    evt.preventDefault()
    setTaskList(taskList.map( one => update.id === one.id ? {...update} : {...one}))
    setShowUpdate(false)
    setUpdate(taskBase)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1> Tareas </h1>
      </header>

      <div>
        <section>
          <AddForm 
            task={task} 
            handleInputTask={handleInputTask} 
            handleSubmitAdd={handleSubmitAdd}
          />
        </section>

        <main>
          {taskList.map((data) => {
            return(
              <div key={data.id} className="task">
                {
                  (showUpdate && data.id === idToUpdate) 
                    ? <UpdateForm 
                        data={data}
                        handleInputUpdate={handleInputUpdate}
                        handleChange={handleChange}
                      />
                    : <Task 
                        data={data}
                        handlePanelUpdate={handlePanelUpdate}
                        handleDelete={handleDelete}
                      />
                }
              </div>
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
