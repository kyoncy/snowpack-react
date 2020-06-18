import React, { useState } from 'react';
import img from './penguin.png';
import style from './App.module.css';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img className={style.image} src={img} />
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
