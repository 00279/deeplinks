import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign('telegram://test');
    }, 2000);
  }, []);
  const onClick = () => window.location.assign('telegram://test');

  return (
    <>
      <button onClick={onClick}>click</button>
    </>
  );
}

export default App;
