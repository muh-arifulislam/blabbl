import { conversations } from "@/data";
import { baseApi } from "@/redux/api/baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return { data: conversations };
      },
      providesTags: ["conversations"],
    }),
  }),
});

export const { useGetConversationsQuery } = customerApi;
