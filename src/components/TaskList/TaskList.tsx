import style from '../TaskList/TaskList.module.scss';
import { ITask } from '../../types/types.ts';
import TaskItem from '../TaskItem/TaskItem.tsx';

interface IProps {
  tasks: ITask[] | []
  setTasks: (tasks: ITask[]) => void
  filter:string;
  category:string;
}

const TaskList = ({tasks, setTasks, filter, category}: IProps) => {


  const filteredTasks = tasks.
  filter((task) => {
      if (category === 'Все') return true;
      return task.category === category;
    })
    .filter((task) => {
      if (filter === 'completed') return task.completed;
      if (filter === 'active') return !task.completed;
      return true;
    });

  return (
    <div className={style.tasks_list}>
        <ul>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
          ))}
        </ul>
    </div>
  );
};

        export default TaskList;