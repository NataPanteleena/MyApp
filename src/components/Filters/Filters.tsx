import style from '../Filters/Filter.module.scss';

interface IProps {
    filter: string;
    setFilter: (filter: string) => void;
}

const filterVariants = [
  {key: "all", variant: "Все"},
  {key: "active", variant: "Невыполненные"},
  {key: "completed", variant: "Выполненные"},
];

const Filters = ({ filter, setFilter }: IProps) => {


    return (
      <div className="filters">
        <h2 className={style.btn_h2}>Статус</h2>
        {filterVariants.map(({key, variant}) => (
        <button
          key={key}
          className={filter === key ? style.active : ''}
          onClick={() => setFilter(key)}
        >
          {variant}
        </button>
          ))}
      </div>
    );
};

export default Filters;