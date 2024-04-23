import {create} from 'zustand'
import { RecipesSliceType, createRecipesSlices } from './recipeSlice'
import {devtools} from 'zustand/middleware'
import {FavoritesSliceType, createFavoritesSlice} from './favoritesSlice'
import {NotificationSliceType, createNotificationSlice} from './notificationSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=> ({
    ...createRecipesSlices(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))

