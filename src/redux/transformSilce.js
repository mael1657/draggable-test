import { createSlice } from "@reduxjs/toolkit";

const transformState = [0, 0, 1]

const transformSlice = createSlice({
  name: 'transform',
  initialState: transformState,
  reducers:{

  }
})

export default transformSlice.reducer;