import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  filter: false,
  showNumber: 4,
  subtotal: 0.0,
}

export const getData = createAsyncThunk(
  "admin/getData",
  async (thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:8080/candidates");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const clearanceSlice = createSlice({
  name: "clearance",
  initialState,
  reducers: {
    showFilter: (state) => {
      state.filter = !state.filter;
    },
    setShowCount: (state, action) => {
      state.showNumber = action.payload;
    },
    setSubTotal: (state, action) => {
      state.subtotal += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {

    });
    builder.addCase(getData.fulfilled, (state, action) => {
        state.candidates = action.payload.data;
    });
  }
});

export const { showFilter, setShowCount, setSubTotal } = clearanceSlice.actions;
export default clearanceSlice.reducer;