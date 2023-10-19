import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [name, setName] = useState();
  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>My Name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;

//ref persists between renders of your component.
//Reference elements inside our html
//useRef will not set the state.
//used for referencing input elements
//used for accessing dom elements as mentioned above.
