import './App.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { PageOne, PageTwo } from './components/Pages/Pages.tsx';
import HomePage from './components/HomePage/HomePage.tsx';

const App = ():JSX.Element => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
