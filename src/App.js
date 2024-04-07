import './App.css';

import {useState} from 'react';

const App = () => {
  const [buttonText, setButtonText] = useState('Click');

  function handleClick() {
    setButtonText('New text');
  }

  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default App;
