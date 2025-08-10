import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/counter/Counter';
import DogImage from './components/dogImage/DogImage';
import './App.css';
import type { RouteType } from './interface/route.interface';
import { RoutePaths } from './enum/route.enum';
import RendereCount from './components/renderCount/renderCount';
import DogBreeds from './components/dogBreeds/DogBreeds';
import Stopwatch from './components/stopwatch/Stopwatch';
import FormatCurrency from './components/formatCurrency/formatCurrency';
import UsePrevious from './components/usePrevious/usePrevious';

function App() {
  const routes: RouteType[] = [
    { path: RoutePaths.DOG, component: DogImage },
    { path: RoutePaths.COUNTER, component: Counter },
    { path: RoutePaths.RENDER_COUNT, component: RendereCount },
    { path: RoutePaths.DOG_BREEDS, component: DogBreeds },
    { path: RoutePaths.STOPWATCH, component: Stopwatch },
    { path: RoutePaths.CURRENCY, component: FormatCurrency },
    { path: RoutePaths.USE_PREVIOUS, component: UsePrevious },
  ];

  return (
    <div className="App">
      <Router>
        <div className="layout">
          <nav className="sidebar">
            <ul>
              {routes.map((e, index) => (
                <li key={index}>
                  <Link to={`/day${index+1}-${e.path}`}>
                    {`Day ${index + 1}: ${e.path}`}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <main className="content">
            <Routes>
              {routes.map((e, index) => {
                return (
                  <Route
                    key={index}
                    path={`/day${index+1}-${e.path}`}
                    element={<e.component />}
                  />
                );
              })}
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
