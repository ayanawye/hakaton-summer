import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getCourse = createAsyncThunk(
  'course/getCourse',
  async ({id, rejectedWithValue}) => {
      try {
          const res = await axios(`https://levelup.pythonanywhere.com/api/v1/direction/${id}`)
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
  course: [],
  error: false,
  loading: false
}
const courseSlice = createSlice({
  name: 'course',
  initialState,
  extraReducers: {
      [getCourse.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getCourse.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getCourse.fulfilled]: (state, action) => {
          state.course = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default courseSlice.reducer