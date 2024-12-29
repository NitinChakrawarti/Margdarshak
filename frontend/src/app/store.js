import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chat/chatSlice';
import todoReducer from '../features/chat/todo';
// import userReducer from '../features/user/user'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
// import { version } from 'react';


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    mentors: chatReducer,
    todos: todoReducer,
    // user: userReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer
})