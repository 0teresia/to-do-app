import React from 'react';
import { MdDeleteForever, MdCheck, MdCancel } from 'react-icons/md';

const Todoitem = ({ todoData, onCancel, onDelete, onCheck }) => {
    return (
        <div>
        <div className='flex items-center h-14 px-5 justify-between'>
            <div className='flex items-center'>
            {todoData.status ? (
                <MdCheck
                className='text-blue-500 h-7 w-4 mr-3 cursor-pointer'
                onClick={() => onCheck(todoData.id)}
                />
            ) : (
                <MdCancel
                className='text-blue-500 h-7 w-4 mr-3 cursor-pointer'
                onClick={() => onCancel(todoData.id)}
                />
            )}
            <p className={todoData.status ? 'line-through' : ''}>{todoData.text}</p>
            </div>
            <div>
            <MdDeleteForever
                className='h-5 w-5 text-red-300 cursor-pointer'
                onClick={() => onDelete(todoData.id)}
            />
            </div>
        </div>
        <div className='bg-slate-200 h-[1px]'></div>
        </div>
    );
};

export default Todoitem;