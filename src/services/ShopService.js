// ShopService.js

const fakeProducts = [
  {
    id: 1,
    name: 'Nom de produit 1',
    price: 29.99,
    description: 'Description simple pour ce produit.',
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Nom de produit 2',
    price: 49.99,
    description: 'Une autre description de produit.',
    image: '/images/product2.jpg',
  },
];

export const getAllProducts = () => {
  return Promise.resolve(fakeProducts);
};
