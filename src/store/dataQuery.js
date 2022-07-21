import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const binanceApi = createApi({
        reducerPath: 'binanceApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2004/' }),
        endpoints: (builder) => ({
            getData: builder.query({
            query: () => `/BTCUSDT/1w/10`,
        }),
    }),
    })
export const  {useGetDataQuery}= binanceApi





