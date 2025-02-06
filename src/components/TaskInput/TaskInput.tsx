import React, {useState} from 'react';
import {ITask} from "../../types/types.ts";
import style from "./TaskInput.module.scss";
import axios from 'axios';

interface IProps {
    tasks: ITask[] | [];
    setTasks: (task: ITask[]) => void;
}

const TaskInput: React.FC<IProps> = ({ tasks, setTasks }: IProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('Без категории');
    const [checked, setChecked] = useState(false);

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>):void => {
      setInputValue(event.target.value);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>):void => {
      setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
      setChecked(event.target.checked);
    };

  const addTask = async (): Promise<void> => {
        if (inputValue.trim()) {
          const newTask = {
                id: Date.now(),
                text: inputValue,
                category:selectedOption,
                priority:checked,
                completed: false,
              };

          try {
            const response = await axios.post('https://67a328e431d0d3a6b7827b97.mockapi.io/api/todo/tasks', newTask);
            console.log('Задача успешно сохранена:', response.data);

            setTasks([...tasks, newTask]);
            setInputValue('');
            setSelectedOption('Без категории');
            setChecked(false);
          } catch (error) {
          console.error('Ошибка при сохранении задачи:', error)}
        }
    };

    return (
      <div className={style.task_input}>
        <input className={style.task_text}
          type="text"
          placeholder="Введите задачу..."
          value={inputValue}
          onChange={handleInputValue}
        />
        <label className={style.checkbox} htmlFor="select">Срочно?</label>
        <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
        <form>
          <select className={style.select_form}
                  id="select"
                  value={selectedOption}
                  onChange={handleSelectChange}>
            <option value="Без категории">Без категории</option>
            <option value="Работа">Работа</option>
            <option value="Дом">Дом</option>
            <option value="Личные">Личные</option>
          </select>
        </form>
        <button onClick={addTask}>Добавить</button>
      </div>
    );
};

export default TaskInput;