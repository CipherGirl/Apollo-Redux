import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from 'inspector';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['comments'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  useGetCommentQuery,
  usePostCommentMutation,
} = api;
