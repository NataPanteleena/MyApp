import React, {useState} from 'react';
import {ITask} from "../../types/types.ts";
import style from "./TaskInput.module.scss";

interface IProps {
    tasks: ITask[] | [];
    setTasks: (task: ITask[]) => void;
}

const TaskInput = ({ tasks, setTasks }: IProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('Без категории');
    const [checked, setChecked] = useState(false);

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

  const addTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks,
              { id: Date.now(),
                text: inputValue,
                category:selectedOption,
                priority:checked,
                completed: false,
              }
            ]);
            setInputValue('');
            setSelectedOption('Без категории');
            setChecked(false);
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