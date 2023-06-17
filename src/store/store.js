import {configureStore} from '@reduxjs/toolkit';
import categories from './reducer/categories';

const store = configureStore({
  reducer: {
    categories,
  }
})

export default store