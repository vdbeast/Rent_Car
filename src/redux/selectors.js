export const selectCatalog = (state) => state.items;
export const selectCatalogFavorite = (state) => state.items.filter(item => item.isFavorite);
export const selectIsLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;