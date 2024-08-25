import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const increase = () => {
    dispatch({ type: 'INCREMENT', payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: 'jongmin', password: '123' } });
  };

  return (
    <div className="box-center">
      <div className="box-center-in">
        <h1>
          {id}
          {password}
        </h1>
        <h1>{count}</h1>
        <div className="sm-box">
          <button className="sm-box1" onClick={increase}>
            증가!
          </button>
          <button className="sm-box2" onClick={decrement}>
            감소!
          </button>
          <button className="sm-box3" onClick={login}>
            Login
          </button>
        </div>
        <div className="bt-box">
          <Box />
        </div>
      </div>
    </div>
  );
}

export default App;
