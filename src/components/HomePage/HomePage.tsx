import { useNavigate } from 'react-router-dom';
import style from './HomePage.module.scss';
import myLogo from '../../assets/hedgehog.svg';

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleUserSelect = (userId: number): void => {
    navigate(userId === 1 ? '/one' : '/two');
  };

  return (
    <>
      <div className={style.enter_block}>
        <h1>Выберите пользователя</h1>
        <div className={style.enter_block__header}>
          <img src={myLogo} className={style.logo} alt="logo" />
          <nav className={style.enter_block__nav}>
            <ul>
              <button onClick={() => handleUserSelect(1)}>
                Пользователь 1
              </button>
              <button onClick={() => handleUserSelect(2)}>
                Пользователь 2
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HomePage;