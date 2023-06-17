import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Test from '../../pages/Test';
import Contacts from '../../pages/Contacts';
import Registration from '../RegistAuth/Regist/Regist';
import Auth from '../RegistAuth/Auth/Auth';
import SubCategories from '../../pages/SubCategories';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/tests' element={<Test />} />
          <Route path='/regist' element={<Registration />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/tests/subcategories/:id' element={<SubCategories />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
  );
};

export default AppRoutes;