import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Test from '../../pages/Test';
import Courses from '../Courses/Courses';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/tests' element={<Test />} />
          <Route path='/tests/courses' element={<Courses />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;