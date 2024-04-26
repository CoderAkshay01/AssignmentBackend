import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
// import { api } from "../features/Auth/authApi"
import CartSlice from "../feature/CartSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  whitelist: [
    "CartSlice",
 
  ],
  version: 1,
  storage,
}

const rootReducer = combineReducers({
//   [api.reducerPath]: api.reducer,

  CartSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    // .concat([
    //   api.middleware,
     
    // ]),
})

export const persistor = persistStore(store)
export const useAppDispatch = () => useDispatch()
export const useTypedSelector  = useSelector
