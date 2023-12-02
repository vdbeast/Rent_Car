export const selectCatalog = (state) => state.cars.cars;
export const selectCatalogFavorite = (state) =>
  state.cars.cars.filter((car) => car.isFavorite);
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFilter = (state) => state.filter.filter;
