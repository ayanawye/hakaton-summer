import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";

export const registUser = createAsyncThunk(
  "regist/registUser",
  async (value) => {
    try {
      const res = await axios.post(
        "https://levelup.pythonanywhere.com/api/v1/register/",
        value
      );

      localStorage.setItem("useInfo", res.data);
      message.open({
        type: "success",
        content: "Регистрация прошла успешно",
        style: {
          marginTop: "100px",
        },
      });
      return res.data;
    } catch (err) {
      message.open({
        type: "error",
        content: `${err.response.data.email[0]}`,
        style: {
          marginTop: "100px",
        },
      });
      return err.response.data.email[0];
    }
  }
);

const initialState = {
  error: false,
  loading: false,
  resp: "",
};
const registSlice = createSlice({
  name: "regist",
  initialState,
  extraReducers: {
    [registUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [registUser.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [registUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.resp = action.payload;
    },
  },
});
export default registSlice.reducer;
