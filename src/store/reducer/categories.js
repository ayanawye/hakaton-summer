import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, {rejectedWithValue}) => {
      try {
          const res = await axios("https://levelup.pythonanywhere.com/api/v1/categories/")
          if(res.statusText !== 'OK'){
              throw new Error("Произошла ошибка")
          }
          return res.data
      }catch (err){
          console.log(rejectedWithValue(err.message))
      }
  }
)

const initialState = {
  categories: [],
  error: false,
  loading: false
}
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
      [getCategories.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getCategories.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getCategories.fulfilled]: (state, action) => {
          state.categories = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default categoriesSlice.reducer