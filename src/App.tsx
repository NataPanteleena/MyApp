import { useState } from 'react'
import { ITask } from './types/types.ts';
import './App.scss'
import Header from './components/Header/Header.tsx';
import TaskInput from './components/TaskInput/TaskInput.tsx';
import Filters from './components/Filters/Filters.tsx';
import Categories from './components/Categories/Categories.tsx';
import TaskList from './components/TaskList/TaskList.tsx';


const App = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [filter, setFilter] = useState<string>('all');
  const [categoty, setCategoty] = useState<string>('Все');


  return (
    <div className="app">
      <Header title='TODO List' text='Дорогу осилит идущий... Топай давай!!!'/>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <div className= "task-panel">
        <div className="btn-block">
          <Categories category={categoty} setCategory={setCategoty}/>
          <Filters filter={filter} setFilter={setFilter} />
        </div>
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} category={categoty}/>
    </div>
    </div>
    );
};

export default App
