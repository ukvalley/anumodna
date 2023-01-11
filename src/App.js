import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Main from './components/Main/Main';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/*' element={< Main />}></Route>          
    </Routes>
  </Router>
  );
}

export default App;
