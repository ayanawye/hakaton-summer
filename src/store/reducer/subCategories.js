import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getSubCategories = createAsyncThunk(
  'subCategories/getSubCategories',
  async ({userId, rejectedWithValue}) => {
      try {
          const res = await axios(`https://levelup.pythonanywhere.com/api/v1/sub-category/${userId}`)
          if(res.statusText !== 'OK'){
              throw new Error("Произошла ошибка")
          }
          console.log(res.data);
          return res.data
      }catch (err){
          console.log(rejectedWithValue(err.message))
      }
  }
)

const initialState = {
  subCategories: [],
  error: false,
  loading: false
}
const subCategoriesSlice = createSlice({
  name: 'subCategories',
  initialState,
  extraReducers: {
      [getSubCategories.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getSubCategories.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getSubCategories.fulfilled]: (state, action) => {
          state.subCategories = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default subCategoriesSlice.reducer