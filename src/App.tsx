import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.assign('telegram://test');
    }, 2000);
  }, []);
  const onClick = () => window.location.assign('telegram://test');
  const onClickWindowOpen = () => window.open('telegram://test');

  return (
    <>
      <button onClick={onClick}>assign</button>
      <button onClick={onClickWindowOpen}>window open</button>
    </>
  );
}

export default App;
