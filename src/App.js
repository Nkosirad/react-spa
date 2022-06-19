import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';

/*
  Root app

  defines our routes, which are home and about
*/
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about/*' element={<About />} />
    </Routes>
  );
}

export default App;
