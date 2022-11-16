import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import build from "next/dist/build";
import { IProduct } from "./types";
import { QueryHooks } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export const itemsAPI = createApi({
  refetchOnMountOrArgChange: true,
  reducerPath: "apiOne",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (build) => ({
    getItems: build.query<IProduct[], number>({
      query: (limit: number) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetItemsQuery, useLazyGetItemsQuery } = itemsAPI;
