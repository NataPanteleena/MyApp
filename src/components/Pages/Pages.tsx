import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.tsx';
import TaskInput from '../../components/TaskInput/TaskInput.tsx';
import Filters from '../../components/Filters/Filters.tsx';
import Categories from '../../components/Categories/Categories.tsx';
import TaskList from '../../components/TaskList/TaskList.tsx';
import style from './Pages.module.scss';
import {useSelector} from "react-redux";
import {fetchTasks} from "../../store/tasks/thunk.ts";
import {getTasks} from "../../store/tasks/selector.ts";
import { RootState } from '../../store/store.ts';
import { useAppDispatch } from '../../store/store';

const BuildPage = ({ userId }: { userId: number }): JSX.Element => {
  const dispatch = useAppDispatch();
  const tasks = useSelector((state: RootState) => getTasks(state));

  const [filter, setFilter] = useState<string>('all');
  const [category, setCategory] = useState<string>('Все');

  useEffect(() => {
    dispatch(fetchTasks(userId))
  }, [dispatch, userId]);

  return (
    <>
      <div className={style.app}>
        <span>Пользователь {userId}</span>
        <Header title="TODO List" text="Дорогу осилит идущий... Топай давай!!!" />
        <TaskInput userId={userId} />
        <div className={style.task_panel}>
          <div className={style.btn_block}>
            <Categories category={category} setCategory={setCategory} />
            <Filters filter={filter} setFilter={setFilter} />
          </div>
          <TaskList tasks={tasks} filter={filter} category={category} />
        </div>
      </div>
    </>
  );
};

export const PageOne = (): JSX.Element => <BuildPage userId={1} />;
export const PageTwo = (): JSX.Element => <BuildPage userId={2} />;