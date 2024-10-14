import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  isLoading: false,
  currentUser: 'User1',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({ ...action.payload, type: 'sent', user: state.currentUser });
    },
    receiveMessage: (state, action) => {
      state.messages.push({ ...action.payload, type: 'received', user: 'User2' });
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { sendMessage, receiveMessage,setIsLoading } = chatSlice.actions;

export default chatSlice.reducer;
