import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './counter/Counter';
import DogImage from './dog_image/DogImage';
import './App.css'

function App() {
  return (
    <>
      <div className="App">
      <Router>
        <ul>
          {['dog', 'counter'].map((e, index) => (<li key={index}>
            <Link to={`/${e}`}>{e}</Link>
          </li>))}
        </ul>
        <Routes>
          <Route path="/dog" element={<DogImage />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
