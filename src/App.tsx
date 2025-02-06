import { useState } from 'react'
import { useEffect } from 'react'
import { ITask } from './types/types.ts';
import './App.scss'
import Header from './components/Header/Header.tsx';
import TaskInput from './components/TaskInput/TaskInput.tsx';
import Filters from './components/Filters/Filters.tsx';
import Categories from './components/Categories/Categories.tsx';
import TaskList from './components/TaskList/TaskList.tsx';

const App = ():JSX.Element => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [filter, setFilter] = useState<string>('all');
  const [category, setCategory] = useState<string>('Все');


  useEffect((): void => {
    fetch('https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks/')
      .then(res => res.json())
      .then(task => setTasks(task));
  }, []);


  return (
    <div className="app">
      <Header title='TODO List' text='Дорогу осилит идущий... Топай давай!!!'/>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <div className= "task-panel">
        <div className="btn-block">
          <Categories category={category} setCategory={setCategory}/>
          <Filters filter={filter} setFilter={setFilter} />
        </div>
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} category={category}/>
    </div>
    </div>
    );
};

export default App
