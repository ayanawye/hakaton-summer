import {configureStore} from '@reduxjs/toolkit';
import categories from './reducer/categories';
import login from './reducer/login';
import regist from './reducer/regist';
import subCategories from './reducer/subCategories';

const store = configureStore({
  reducer: {
    categories,
    login,
    regist,
    subCategories,
  }
})

export default store