import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from './redux/features/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.message);

  useEffect(() => {
    if (!greeting) {
      dispatch(fetchMessage())
        .then(() => {
          {greeting}
        })
        .catch((error) => {
          (error)
        });
    }
  },{greeting} [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
