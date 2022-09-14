import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from '../details/detailsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);

  if (stats.length === 0) {
    dispatch(getStats());
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Welcome to our page!</h1>
          <p className="text-center">We have air pollution data to share</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
