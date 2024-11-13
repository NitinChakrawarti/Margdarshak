import {configureStore} from '@reduxjs/toolkit';
import chatReducer from '../features/chat/chatSlice';
import todoReducer from '../features/chat/todo';

export const store = configureStore({
    reducer: {
        mentors: chatReducer,
        todos: todoReducer,
    },

})