import {ITask} from "../../types/types.ts";
import style from "./TaskItem.module.scss";
import axios from 'axios';
import React from 'react';

interface IProps {
    task: ITask;
    tasks: ITask[];
    setTasks: (task: ITask[]) => void;
}

const TaskItem: React.FC<IProps> = ({ task, tasks, setTasks }: IProps):JSX.Element => {

    const getBackgroundColor = (category: ITask['category']): string => {
      switch (category) {
        case 'Работа' : return style.categoryWork;
        case 'Дом' : return style.categoryHome;
        case 'Личные' : return style.categoryPersonal;
        default: return style.categoryOthers;
      }
    };

    const getPriority = (priority: ITask['priority']): string | undefined => {
      if (priority) {
        return style.highPriority
      }
    };

    const deleteTask = async () : Promise<void> => {
      await axios.delete(`https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks/${task.id}`);

      setTasks(tasks.filter((t):boolean => t.id !== task.id));
    };

    const toggleCompletion = async () : Promise<void> => {
      try {
        const updatedTask = { ...task, completed: !task.completed };
        const response = await axios.put(`https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks/${task.id}`,
          updatedTask);
        console.log('задача обновлена', response.data);
 
        setTasks(
          tasks.map((t):ITask => t.id === task.id ? { ...t, completed: !t.completed } : t
          )
        );
      } catch (error) {
        console.log('возникла ошибка:', error);
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
              onChange={toggleCompletion}
            />
            </div>
            <span className={style.taskItem__task} >{task.text}</span>
            <button className={style.taskItem__button} onClick={deleteTask}>Удалить</button>
            </div>
          </li>
      </div>
    );
};

export default TaskItem;