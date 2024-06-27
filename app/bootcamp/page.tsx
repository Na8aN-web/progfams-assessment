import React from 'react';
import TodoList from '@/components/TodoList';

const Tasks: React.FC = () => {
  return (
    <div className='bg-blue-700 p-8 pt-36 relative px-0'>
      <div className='w-full bg-[#072951] absolute top-0 py-12'></div>
      <TodoList />
    </div>
  );
}

export default Tasks;
