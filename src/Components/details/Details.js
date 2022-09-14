import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStats } from './detailsSlice';

const Air = () => {
  const dispatch = useDispatch();
  const airstats = useSelector((state) => state.airstats);

  if (airstats.length === 0) {
    dispatch(getStats());
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Welcome to our page!</h1>
        </div>
      </div>
    </div>
  );
};
export default Air;
