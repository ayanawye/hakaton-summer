import {configureStore} from '@reduxjs/toolkit';
import categories from './reducer/categories';
import login from './reducer/login';
import regist from './reducer/regist';
import subCategories from './reducer/subCategories';
import course from './reducer/course';
import application from './reducer/application';

const store = configureStore({
  reducer: {
    categories,
    login,
    regist,
    subCategories,
    course,
    application,
  }
})

export default store