import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const API_URL = 'http://localhost:3000/api/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/signup`, credentials);
      const { token } = data;
      localStorage.setItem('token', token);
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/login`, credentials);
      const { token } = data;
      localStorage.setItem('token', token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token || localStorage.getItem('token');

    if (!token) {
      return thunkAPI.rejectWithValue('No token available for logout');
    }

    try {
      await axios.get(`${API_URL}/users/logout`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
  
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
  
    try {
      const token = localStorage.getItem('token');
    const res = await axios.get(`${API_URL}/users/current`, {
      headers: { Authorization: `Bearer ${token}` },
    });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });
 
const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
