"use client";

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';

const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto py-4 px-4 bg-white rounded-md">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
          placeholder="Write out your TO-DO"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 rounded-md text-white"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 mb-2 rounded-md"
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              className="bg-blue-800 flex justify-center items-center py-2 px-3 rounded-md"
            >
              <Image src="/assets/delete.png" alt='delete' width={16} height={16} className='text-white ml-[2px]' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
