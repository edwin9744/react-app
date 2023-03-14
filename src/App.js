import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@mui/material';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Statebasic from './components/Statebasic';
import TRAIL from './components/TRAIL';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Navbar/> */}
      {/* <Statebasic/> */}
      {/* <TRAIL></TRAIL> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
