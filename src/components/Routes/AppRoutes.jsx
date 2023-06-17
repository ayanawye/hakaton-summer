import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;