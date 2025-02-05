import {ITask} from "../../types/types.ts";
import style from "./TaskItem.module.scss";

interface IProps {
    task: ITask;
    tasks: ITask[];
    setTasks: (task: ITask[]) => void;
}

const TaskItem = ({ task, tasks, setTasks }: IProps) => {

    const getBackgroundColor = (category: ITask['category']) => {
      switch (category) {
        case 'Работа' : return style.categoryWork;
        case 'Дом' : return style.categoryHome;
        case 'Личные' : return style.categoryPersonal;
        default: return style.categoryOthers;
      }
    }

    const getPriority = (priority: ITask['priority']) => {
      if (priority) {
        return style.highPriority
      }
    }

    const toggleCompletion = () => {
        setTasks(
            tasks.map((t) =>
                t.id === task.id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const deleteTask = () => {
        setTasks(tasks.filter((t) => t.id !== task.id));
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