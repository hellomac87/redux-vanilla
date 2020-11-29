import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [] as {text:string,id:number}[],
  reducers: {
    add: (state, action :PayloadAction<string>) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;

