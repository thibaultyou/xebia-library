import {
  getInitialPrice,
  getPricesWithOffers,
  getLowerPrice,
  getRoundedValue,
} from './formulas';

describe('Offers formulas', () => {
  const basket = [
    {
      price: 35,
    },
    {
      price: 30,
    },
  ];

  const offers = [
    {
      type: 'percentage',
      value: '5',
    },
    {
      type: 'minus',
      value: '15',
    },
    {
      type: 'slice',
      sliceValue: '100',
      value: '12',
    },
  ];

  const expectedOffers = [
    { type: 'percentage', price: 61.75 },
    { type: 'minus', price: 50 },
    { type: 'slice', price: 65 },
  ];

  it('should return total', () => {
    expect(getInitialPrice(basket)).toBe(65);
  });

  it('should return prices with offers', () => {
    expect(getPricesWithOffers(65, offers)).toStrictEqual(expectedOffers);
  });

  it('should return lower price', () => {
    expect(getLowerPrice(65, expectedOffers)).toBe(50);
  });

  it('should return rounded value', () => {
    expect(getRoundedValue(37.772879897897)).toBe(37.77);
  });
});
