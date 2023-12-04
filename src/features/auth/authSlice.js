import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cleanUpAuthToken = (str) => {
  return str.split("&")[1].slice(5);
};

const testAuthGetter = async (authTok) => {
  const refreshToken = "12b5606900d078cff2435c7617e95c37d4318912";
  try {
    const response = await axios.post(
      //`https://www.strava.com/api/v3/oauth/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${authTok}&grant_type=authorization_code`
      //`https://www.strava.com/api/v3/oauth/token?client_id="116117"&client_secret="7f89a27c089e141e58680835f46530d5ae34b0d6"&code=${refreshToken}&grant_type=refresh_token`
      //const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAuthToken = createAsyncThunk("data/getAuthToken", async () => {
  const authTok = cleanUpAuthToken(window.location.search);
  const tokens = await testAuthGetter(authTok);
     const accessToken = tokens.access_token;
  return tokens;
     const res = await axios.get(
       `https://www.strava.com/api/v3/athlete?access_token=1957e24a146cbce58b3fc3325fe0bd29bd69f9ef`
     );
     return res.data;
});

const initialState = {
  token: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "AuthToken",
  initialState,
  reducers: {},
  extraReducers: {
    [getAuthToken.pending]: (state) => {
      state.status = "pending";
      state.error = false;
    },
    [getAuthToken.fulfilled]: (state, action) => {
      state.status = "success";
      state.token = action.payload;
    },
    [getAuthToken.rejected]: (state) => {
      state.status = "error";
      state.error = true;
    },
  },
});

export default authSlice.reducer;
export const authToken = (state) => state.accessToken;
