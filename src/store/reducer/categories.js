import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async ({_, rejectedWithValue }) => {
    try {
      const resp = await axios.get("https://levelup.pythonanywhere.com/api/v1/categories/");
      if (resp.statusText !== "OK") {
        throw new Error("Произошла ошибка");
      }
      return resp.data;
    } catch (err) {
      console.log(rejectedWithValue(err.message));
    }
  }
);

const initialState = {
  categories: [],
  error: false,
  loading: false,
};

const categoriesSlicer = createSlice({
  name: "categories",
  initialState,
  extraReducers(builder) {
    builder
    .addCase(getCategories.pending, (state) => {
      state.loading = true; 
      state.error = false;
    })
    .addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = false;
    })
    .addCase(getCategories.rejected, (state) => {
      state.loading = true; 
      state.error = false;
    })
  },
});

export default categoriesSlicer.reducer;