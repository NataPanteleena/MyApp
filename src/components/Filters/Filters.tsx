import style from '../Filters/Filter.module.scss';
import React from 'react';

interface IProps {
    filter: string;
    setFilter: (filter: string) => void;
}

const filterVariants = [
  {key: "all", variant: "Все"},
  {key: "active", variant: "Невыполненные"},
  {key: "completed", variant: "Выполненные"},
];

const Filters: React.FC<IProps> = ({ filter, setFilter }: IProps):JSX.Element => {


    return (
      <div className="filters">
        <h2 className={style.btn_h2}>Статус</h2>
        {filterVariants.map(({key, variant}):JSX.Element => (
        <button
          key={key}
          className={filter === key ? style.active : ''}
          onClick={():void => setFilter(key)}
        >
          {variant}
        </button>
          ))}
      </div>
    );
};

export default Filters;