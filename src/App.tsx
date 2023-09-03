import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <div>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment</button>
      {count}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
