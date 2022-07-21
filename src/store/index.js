import {configureStore} from "@reduxjs/toolkit";
import {binanceApi} from "./dataQuery";
export const store = configureStore({
    reducer:{
        [binanceApi.reducerPath]:binanceApi.reducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(binanceApi.middleware)
})