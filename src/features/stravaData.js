import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";
import { data_raw } from "./data/stravaData_raw";

// export const getStravaData = createAsyncThunk(
//   "data/getData",
//   async (__, thunkAPI) => {
//     const access_token = thunkAPI.getState().token.token.access_token;
//     const access_token="a2e453e3ea7629e91184c868ce6cbcc39a289aab"
//     const sixMonthsAgo = moment().subtract(6, "months").unix();
//     const today = moment().unix();
//      const token = await getAccessToken();
//     const res = await axios.get(
//       `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}&per_page=100&after=${sixMonthsAgo}&before=${today}`
//     );
//     return res.data;
//   }
// );

const refresh_token = "b72d70566eb25542c8f08862b14c02d08bbaa25e";
let access_token = "a2e453e3ea7629e91184c868ce6cbcc39a289aab";

export const getStravaData = createAsyncThunk("data/getClubMembers", async () => {
  let id =1188418
  const clubId = ''
  const sixMonthsAgo = moment().subtract(6, "months").unix();
  const today = moment().unix();
  try {
    const refreshResponse = await axios.post(
      "https://www.strava.com/oauth/token",
      {
        grant_type: "refresh_token",
        refresh_token,
        client_id: "116117",
        client_secret: "7f89a27c089e141e58680835f46530d5ae34b0d6",
      }
    );
    access_token = refreshResponse.data.access_token;
  
    const res = await axios.get(
     // `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}&per_page=100&after=${sixMonthsAgo}&before=${today}`
      `https://www.strava.com/api/v3/clubs/${id}/activities?access_token=${access_token}&per_page=100&before=${today}`
    )

    return res.data;
  } catch (error) {
    // Handle other non-auth related errors
       console.log(error)
  }
});
const initialState = {
  data:[],
  status: "idle",
  error: null,
};

export const dataSlice = createSlice({
  name: "stravaData",
  initialState,
  reducers: {
    getRefreshToken: {},
  },
  extraReducers: {
    [getStravaData.pending]: (state) => {
      state.status = "pending";
      state.error = false;
    },
    [getStravaData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [getStravaData.rejected]: (state) => {
      state.status = "error";
      state.error = true;
    },
  },
});

export default dataSlice.reducer;
export const allData = (state) => state.data;
