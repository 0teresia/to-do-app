import React, { useState } from 'react';
import './App.css';
import backgroundImage from './assets/bg-mobile-light.jpg';
import { FaMoon } from 'react-icons/fa';
import Form from './componets/Form';
import Todoitem from './componets/Todoitem';
import FilterNav from './componets/FilterNav';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('');

  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false,
    };

    setTodoList((prevData) => [newTodo, ...prevData]);
  }

  //Cancel
  const onCancel = (id) => {
    const updatedList = todoList.map((item) => {
      if (item.id === id && !item.status) {
        return { ...item, status: true };
      }
      return item;
    });
    setTodoList(updatedList);
  };
  
  //Delete
  const onDelete = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };
  

  // Handle check
  const onCheck = (id) => {
    const updatedList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setTodoList(updatedList);
  };

  // Filter the todoList based on the selected filter
  const filteredTodoList = todoList.filter((item) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return !item.status;
    } else if (filter === 'Completed') {
      return item.status;
    }
    return true;
  });

   // Clear completed
   const clearCompleted = () => {
    const updatedList = todoList.filter((item) => !item.status);
    setTodoList(updatedList);
  };

  return (
    <div className='min-h-screen bg-[#F2F2F2]'>
      <div className="h-52 px-5 pt-10 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex justify-between text-3xl container mx-auto px-4 font-semibold text-white items-center'>
          <p>TODO</p>
          <FaMoon className='h-10 w-8' />
        </div>
        <Form addHandler={addTodo} />
      </div>
      <div>
        <div className='relative -top-8 container px-4 rounded-md bg-white w-[90%] mx-auto'>
          <FilterNav filter={filter} setFilter={setFilter} />
          {filteredTodoList.map((item) => (
            <Todoitem
              key={item.id}
              todoData={item}
              onCancel={onCancel}
              onDelete={onDelete}
              onCheck={onCheck}
            />
          ))}
          <div className='text-gray-500 flex justify-between px-5 items-center h-12'>
            <p>{filteredTodoList.length} items</p>
            <button type='button' onClick={clearCompleted}>Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



