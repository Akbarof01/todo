import  { useState } from 'react';
import './App.css'

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(inputText);
      
      setInputText(''); 
    }
  };

  const checkboxStyle = {
    border: '1px solid red', 
    padding: '5px', 
  };
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };







  return (
    
    <div className='All'>
      <div className='hhed1'>
        <div className='cotalog'>
        <h3 className='q1'>All</h3>
        <h3 className='q2'>Groceries</h3>
        <h3 className='q2'>College</h3>
        <h3 className='q2'>Payments</h3>
        </div>
      </div>
      <div className='hhed2'>
<h1>All Tasks</h1>
<input 
className='yinp'
          type="text"
          value={newTask}
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task insdie ‘All’ category" />
<div className='qw'>
<ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input className='chek' style={checkboxStyle} type="checkbox" id="groceryCheckbox" />
      <label htmlFor="groceryCheckbox">Get a new helmet</label>
      <button>Uncategorized</button><button className='dalet' ><img className='qutt' src="./quti.png" alt="" /></button>
    </div>   
    <div className='qw'>
      <input className='chek' style={checkboxStyle} type="checkbox" id="groceryCheckbox" />
      <label htmlFor="groceryCheckbox">Purchase Milk & Corn Flakes</label>
      <button>Groceries</button>
    </div> 
    <div className='qw'>
      <input className='chek' style={checkboxStyle} type="checkbox" id="groceryCheckbox" />
      <label htmlFor="groceryCheckbox">Pay mortgage</label>
      <button>Payments</button>
    </div> 
    <div className='qw'>
      <input className='chek' style={checkboxStyle} type="checkbox" id="groceryCheckbox" />
      <label htmlFor="groceryCheckbox">Complete Assignments</label>
      <button>College</button>
    </div> 
    <div className='qw'>
      <input className='chek' style={checkboxStyle} type="checkbox" id="groceryCheckbox" />
      <label htmlFor="groceryCheckbox">Get a new helmet</label>
      <button>Uncategoriezed</button>
      </div>
    </div> 
    </div>
    
  )
}

export default App
