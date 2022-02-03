import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types/types';

// Note: The api doesn't accept real POST/PUT/DELETE data so the response is faked. The update happens locally
// If POST/PUT/DELETE did work, the associated tags trigger a UI refresh once data is submitted. These are commented out for this project
// To update locally, I use onQueryStarted to manually trigger an optimistic update

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/',
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => 'data',
      // providesTags: ['User'],
    }),
    addNewUser: build.mutation<{}, User>({
      query: (user) => ({
        url: `data`,
        method: 'POST',
        body: user,
      }),
      async onQueryStarted(user, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
            draft.push(user);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      // invalidatesTags: ['User'],
    }),
    getUser: build.query<User, string>({
      query: (id) => `data/${id}`,
      // providesTags: ['User'],
    }),
    deleteUser: build.mutation<void, string>({
      query: (id) => ({
        url: `data/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
            const users = draft.filter((user) => user.id !== id);
            return users;
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      // invalidatesTags: ['User'],
    }),
    updateUser: build.mutation<void, User>({
      query: ({ id, ...rest }) => ({
        url: `data/${id}`,
        method: 'PATCH',
        body: rest,
      }),
      async onQueryStarted({ id, ...rest }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getUsers', undefined, (draft) => {
            let user = draft.find((user) => user.id === id);
            const {
              name,
              username,
              email,
              address: { city },
            } = rest;
            if (user) {
              user.name = name;
              user.username = username;
              user.email = email;
              user.address.city = city;
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      // invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = usersApi;
