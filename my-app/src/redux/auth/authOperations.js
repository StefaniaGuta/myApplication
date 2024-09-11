import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:3000/api/auth';

const SIGN_UP_ENDPOINT = '/users/signup';
const SIGN_IN_ENDPOINT = '/users/login';
const SIGN_OUT_ENDPOINT = '/users/logout';
const GET_USER_ENDPOINT = '/users/current';


const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(SIGN_UP_ENDPOINT, credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);
      console.log(res);
      return res.data;
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data) {
        console.error('Error response data:', e.response.data);
        toast.warn(e.response.data.message || 'Please try again!');
      } else {
        toast.warn('Please try again!');
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(SIGN_IN_ENDPOINT, credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (e) {
    if (e.response && e.response.data) {
      console.error('Error response data:', e.response.data);
      toast.warn(e.response.data.message || 'Please try again!');
    } else {
      toast.warn('Please try again!');
    }
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(SIGN_OUT_ENDPOINT);
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get(GET_USER_ENDPOINT);
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
