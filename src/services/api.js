export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';

  const result = await fetch(url);
  const data = await result.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  const result = await fetch(url);
  const data = await result.json();

  return data;
}

export async function getProductsFromCategory(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const result = await fetch(url);
  const data = await result.json();

  return data;
}
export async function getProductById(itemId) {
  const url = `https://api.mercadolibre.com/items/${itemId}`;

  const result = await fetch(url);
  const data = await result.json();

  return data;
}
