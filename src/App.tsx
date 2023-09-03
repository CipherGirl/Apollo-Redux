import {
  decrement,
  incrementByAmount,
} from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment</button>
      {count}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
