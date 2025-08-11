import { useState } from 'react'


function App() {
  const [works, setWorks] = useState([]);
  const [newWork, setNewWork] = useState("");

  const addWork = () => {
    if (newWork.trim() === "") return;
    const work = {
      id: Date.now(),
      text: newWork,
      completed: false,
    };
    setWorks([...works, work]);
    setNewWork("");
  }

  const toggleComplete = (id) => {
    setWorks(works.map((work) => work.id === id ? {...works, completed: !work.completed} : work));
  }

  const deleteWork = (id) => {
    setWorks(works.filter((work) => work.id !== id));
  }



  return (
    <>
      <h1>Todo app</h1>
      <input 
        type="text" 
        placeholder="Type in your work..." 
        value={newWork} 
        onChange={(e) => setNewWork(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addWork()}
      />
      <button onClick={addWork}>Add</button>

      <ul>
        {works.map((work) => (
          <li key={work.id} className={work.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(work.id)}>{work.text}</span>
            <button onClick={() => deleteWork(work.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
