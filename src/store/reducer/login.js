import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (value, { rejectedWithValue }) => {
    try {
      const res = await axios.post(
        "https://levelup.pythonanywhere.com/api/v1/login/",
        value
      );
      if (res.statusText !== "OK") {
        throw new Error("Произошла ошибка");
      }
      localStorage.setItem("useInfo", res.data);
      message.open({
        type: "success",
        content: `Вы вошли в аккаунт`,
        style: {
          marginTop: "100px",
        },
      });
    } catch (err) {
      message.open({
        type: "error",
        content: `${err.response.data.non_field_errors[0]}`,
        style: {
          marginTop: "100px",
        },
      });
      console.log(rejectedWithValue(err.message));
    }
  }
);

const initialState = {
  error: false,
  loading: false,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [loginUser.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
    [loginUser.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
    },
  },
});
export default loginSlice.reducer;
