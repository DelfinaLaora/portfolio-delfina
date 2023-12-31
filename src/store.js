import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/Theme/ThemeSlice'

export const store = configureStore({
   reducer: {
      theme: themeReducer,
   },
})
