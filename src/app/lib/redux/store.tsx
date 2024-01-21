'use client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/lib/persistStore'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    cart: null,
    wishlist: null,
    products: null,
})

const authPersistConfig = {
    version: 1,
    whitelist: ['cart', 'wishlist'],
    key: 'root',
    storage,
}

export const store = configureStore({
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/REHYDRATE', 'persist/PERSIST'],
            },
        }),
    reducer: persistReducer(authPersistConfig, rootReducer),
})

export const persistor = persistStore(store, {}, () => {
    persistor.persist()
})

export const   StorageProviders = ({ children }: { children: any }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
