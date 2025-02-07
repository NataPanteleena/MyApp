import {ITask} from "../../types/types.ts";
import style from "./TaskItem.module.scss";
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../../store/tasks/tasksReducer.ts';

interface IProps {
    task: ITask;
}

const TaskItem: React.FC<IProps> = ({ task }: IProps):JSX.Element => {
  const dispatch = useDispatch();

    const getBackgroundColor = (category: ITask['category']): string => {
      switch (category) {
        case 'Работа' :
          return style.categoryWork;
        case 'Дом' :
          return style.categoryHome;
        case 'Личные' :
          return style.categoryPersonal;
        default:
          return style.categoryOthers;
      }
    };

    const getPriority = (priority: ITask['priority']): string | undefined => {
      if (priority) {
        return style.highPriority
      }
    };

    const handleDeleteTask = async () : Promise<void> => {
      try {
        await axios.delete(`https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks/${task.id}`);
        dispatch(deleteTask(task.id));
      } catch (error) {
        console.error('Ошибка при удалении задачи:', error);
      }
    };

    const handleToggleCompletion = async () : Promise<void> => {
      try {
        const updatedTask = { ...task, completed: !task.completed };
        await axios.put(`https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks/${task.id}`, updatedTask);
        dispatch(toggleTaskCompletion(task.id));
      } catch (error) {
        console.error('Ошибка при обновлении задачи:', error);
      }
    };

    return (
      <div className={`${getPriority(task.priority)} ${getBackgroundColor(task.category)}`}>
          <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className={style.taskItem}>
            <span className={style.taskItem__category} >{task.category}</span>
            <div>
            <input
              className={style.taskItem__checkbox}
              type="checkbox"
              checked={task.completed}
              onChange={handleToggleCompletion}
            />
            </div>
            <span className={style.taskItem__task} >{task.text}</span>
            <button className={style.taskItem__button} onClick={handleDeleteTask}>Удалить</button>
            </div>
          </li>
      </div>
    );
};

export default TaskItem;