import React, { useState } from 'react';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
