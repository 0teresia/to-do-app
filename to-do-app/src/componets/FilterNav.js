import React from 'react';

const FilterNav = ({ filter, setFilter }) => {
    return (
        <div className='border-gray-500 border-b-[1px] flex justify-center gap-8 h-14 rounded-tl-md rounded-tr-md'>
        <button type='button' onClick={() => setFilter('All')} className={filter === 'All' ? 'text-blue-500' : ''}>
            All
        </button>
        <button type='button' onClick={() => setFilter('Active')} className={filter === 'Active' ? 'text-blue-500' : ''}>
            Active
        </button>
        <button type='button' onClick={() => setFilter('Completed')} className={filter === 'Completed' ? 'text-blue-500' : ''}>
            Completed
        </button>
        </div>
    );
};

export default FilterNav;