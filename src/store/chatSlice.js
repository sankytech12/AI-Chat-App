import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
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
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;
