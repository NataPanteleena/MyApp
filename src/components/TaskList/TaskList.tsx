import style from '../TaskList/TaskList.module.scss';
import TaskItem from '../TaskItem/TaskItem.tsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

interface IProps {
  filter:string;
  category:string;
}

const TaskList: React.FC<IProps> = ({ filter, category }: IProps): JSX.Element => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const filteredTasks = tasks.
  filter((task): boolean => {
      if (category === 'Все') return true;
      return task.category === category;
    })
    .filter((task):boolean => {
      if (filter === 'completed') return task.completed;
      if (filter === 'active') return !task.completed;
      return true;
    });

  return (
    <div className={style.tasks_list}>
        <ul>
          {filteredTasks.map((task):JSX.Element => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
    </div>
  );
};

export default TaskList;