import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [answer, setAnswer] = useState(42);
  useEffect(() => {
    setAnswer(256);
  }, []);

  return <h2>Hello function components! {answer} </h2>;
}

ReactDOM.render(<App />, document.getElementById('root'));