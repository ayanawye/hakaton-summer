import React from 'react';
import Tests from '../components/TestsMain/Tests';
import Testing from '../components/Testing/Testing';
import TestCards from '../components/TestCards/TestCards';
import Map from '../components/Map/Map';

const Test = () => {
  return (
    <div>
      <Tests/>
      <Testing />
      <TestCards />
      <Map/>
    </div>
  );
};

export default Test;