import './App.css';
import Router from '../src/components/Router/Router'
import { createContext } from 'react';

export const useContext = createContext();

function App() {

  return (
    <Router/>
  )
  
}

export default App;