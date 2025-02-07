import { useState, useEffect } from 'react';
import { ITask } from '../../types/types.ts';
import Header from '../../components/Header/Header.tsx';
import TaskInput from '../../components/TaskInput/TaskInput.tsx';
import Filters from '../../components/Filters/Filters.tsx';
import Categories from '../../components/Categories/Categories.tsx';
import TaskList from '../../components/TaskList/TaskList.tsx';
import style from './Pages.module.scss'

const BuildPage = ({ userId }: { userId: number }): JSX.Element => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [filter, setFilter] = useState<string>('all');
  const [category, setCategory] = useState<string>('Все');

  useEffect((): void => {
    fetch(`https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks/?userId=${userId}`)
      .then((res) => res.json())
      .then((task) => setTasks(task));
  }, []);

  return (
    <>
      <div className={style.app}>
        <span>Пользователь {userId}</span>
        <Header title="TODO List" text="Дорогу осилит идущий... Топай давай!!!" />
        <TaskInput tasks={tasks} setTasks={setTasks} userId={userId} />
        <div className={style.task_panel}>
          <div className={style.btn_block}>
            <Categories category={category} setCategory={setCategory} />
            <Filters filter={filter} setFilter={setFilter} />
          </div>
          <TaskList tasks={tasks} setTasks={setTasks} filter={filter} category={category} />
        </div>
      </div>
    </>
  );
};

export const PageOne = (): JSX.Element => <BuildPage userId={1} />;
export const PageTwo = (): JSX.Element => <BuildPage userId={2} />;