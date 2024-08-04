
import { useState } from 'react';
import './App.css';
import Navbar from './My Components/Navbar';
import NewsBoard from './My Components/NewsBoard';

function App() {

  const[category, setCategory] = useState("general");

  return (
    <div className="cont">
      <Navbar setCategory = {setCategory}/>
      <NewsBoard category = {category}/>
    </div>
  );
}

export default App;
