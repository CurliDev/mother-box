import {
  logout,
  setCredentials,
} from "@/provider/redux/features/auth/authSlice";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, options) => {
  let result = await baseQuery(args, api, options);

  // If the accessToken is expired
  if (result?.error?.originalStatus === 403) {
    console.log("Sending refresh token...");

    // Send the refresh token to get the new accessToken
    const refreshResult = await baseQuery("/refresh", api, options);
    console.log(refreshResult);

    if (refreshResult?.data) {
      const user = api.getState().auth.user;

      // Store the new accessToken
      api.dispatch(setCredentials({ ...refreshResult.data, user: user }));

      // Retry the original query with the new accessToken
      result = await baseQuery(args, api, options);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
