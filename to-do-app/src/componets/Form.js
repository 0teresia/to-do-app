import React, { useState } from 'react';


const Form = ({ addHandler }) => {
const [userInput, setUserInput] = useState('');
const handleForm = (e) => {
    e.preventDefault();
    addHandler(userInput)
    setUserInput('')
    }

    return (
        <div className='py-2 my-5 container mx-auto px-2 bg-white rounded-md'>
        <form onSubmit={handleForm} className='flex items-center' >
            <div className='w-full'>
            <input  
            name='todoItem'
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            required
            type="text" placeholder='Create new ToDo item' className='rounded-md outline-none bg-white h-6 text-sm px-3 block w-full focus:outlining-none' />
            </div>
            <div>
            <button type='submit' className='bg-blue-900 px-2 py-1 inline-flex items-center font-medium text-white rounded-md'>Add</button>
            </div> 
        </form>

        </div>
    );
};

export default Form;