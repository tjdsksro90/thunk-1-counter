import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2개의 INPUT
// (1) 이름 : 의미는 크게 없음
// (2) 함수
export const __addNumber = createAsyncThunk(
  // 첫번째 인자 : action value
  "addNumber",
  // 두번째 인자 : 콜백함수
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(plusOne(payload));
    }, 3000);
  }
);

// 초기 상태값(state)
const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusOne: (state, action) => {
      state.number = state.number + action.payload;
    },
    MinusOne: (state, action) => {
      state.number = state.number + action.payload;
    },
  },
});

// 모듈파에서는 리듀서를 export default 한다.

export default counterSlice.reducer;
export const { plusOne, MinusOne } = counterSlice.actions;
