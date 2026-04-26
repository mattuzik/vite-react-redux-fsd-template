import { useSelector } from 'react-redux';

type CounterState = {
  counter: {
    value: number;
  };
};

export const CounterValue = () => {
  const value = useSelector((state: CounterState) => state.counter.value);
  return <h3>Count: {value}</h3>;
}