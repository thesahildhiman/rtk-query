import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    // fetch all the tasks
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),

    // add new task
    addTask: builder.mutation({
      query: (task) => ({ url: "/tasks", method: "POST", body: task }),
      invalidatesTags: ["Tasks"],
    }),

    // update task
    updateTask: builder.mutation({
      query: ({ id, ...updatedTask }) => {
        console.log({ id, ...updatedTask });
        return { url: `/tasks/${id}`, method: "PATCH", body: updatedTask };
      },
    }),
  }),
});

export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation } =
  tasksApi;
