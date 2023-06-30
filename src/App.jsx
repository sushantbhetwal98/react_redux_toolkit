import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
import './App.css'

function App() {
  const { count } = useSelector((state) => state.counter);
  // const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch()

  return (
    <>
      <div className="app">
        <h1>The count is : {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
      </div>
    </>
  )
}

export default App
