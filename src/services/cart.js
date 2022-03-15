const SHOPPING_CART = 'shoppingCart';

if (!JSON.parse(localStorage.getItem(SHOPPING_CART))) {
  localStorage.setItem(SHOPPING_CART, JSON.stringify([]));
}

export const readShoppingCart = () => JSON.parse(localStorage.getItem(SHOPPING_CART));

export const saveShoppingCart = (cartItem) => localStorage
  .setItem(SHOPPING_CART, JSON.stringify(cartItem));

/* export const getFavoriteSongs = () => new Promise((resolve) => {
  const favoriteSongs = readFavoriteSongs();
  simulateRequest(favoriteSongs)(resolve);
});

export const addSong = (song) => new Promise((resolve) => {
  if (song) {
    const favoriteSongs = readFavoriteSongs();
    saveFavoriteSongs([...favoriteSongs, song]);
  }
  simulateRequest(SUCCESS_STATUS)(resolve);
});

export const removeSong = (song) => new Promise((resolve) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs(favoriteSongs.filter((s) => s.trackId !== song.trackId));
  simulateRequest(SUCCESS_STATUS)(resolve);
}); */
