import style from '../Categories/Categories.module.scss';


interface IProps {
    category: string;
    setCategory: (category: string) => void;
}


const Categories = ({category, setCategory}: IProps) => {

    return (
      <div className="categories">
        <div>
          <h2 className={style.btn_h2}>Категории</h2>
          <button
            key="all"
            className={category === 'Все' ? style.active : ''}
            onClick={() => setCategory('Все')}
          >
            Все категории
          </button>
          <button
            key="home"
            className={category === 'Дом' ? style.active : ''}
            onClick={() => setCategory('Дом')}
          >
            Дом
          </button>
          <button
            key="work"
            className={category === 'Работа' ? style.active : ''}
            onClick={() => setCategory('Работа')}
          >
            Работа
          </button>
          <button
            key="personal"
            className={category === 'Личные' ? style.active : ''}
            onClick={() => setCategory('Личные')}
          >
            Личные
          </button>
          <button
            key="other"
            className={category === 'Без категории' ? style.active : ''}
            onClick={() => setCategory('Без категории')}
          >
            Без категории
          </button>
        </div>
      </div>
    );
  };

        export default Categories;