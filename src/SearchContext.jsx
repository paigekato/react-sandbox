import React from 'react';

const SearchContext = React.createContext({
  // describe what the data looks like
  // would be used for testing - helps for reference for context
  // will be put on context without provider but this is a no
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;