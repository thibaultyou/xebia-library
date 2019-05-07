export const getPricesWithOffers = (initialPrice, offers) => {
  const prices = [];

  offers.forEach(offer => {
    switch (offer.type) {
      case 'percentage':
        prices.push({
          type: offer.type,
          price: initialPrice * (1 - offer.value / 100),
        });
        break;
      case 'minus':
        prices.push({
          type: offer.type,
          price: initialPrice - offer.value,
        });
        break;
      case 'slice':
        let sliced = initialPrice;
        if (initialPrice >= offer.sliceValue) {
          for (let i = 0; i < initialPrice / offer.sliceValue; i++) {
            sliced = sliced - offer.value;
          }
        }
        prices.push({
          type: offer.type,
          price: sliced,
        });
        break;
      default:
        break;
    }
  });
  return prices;
};

export const getInitialPrice = items =>
  items.map(item => item.price).reduce((a, b) => a + b, 0);

export const getLowerPrice = (initialPrice, prices) =>
  prices.reduce((min, p) => (p.price < min ? p.price : min), initialPrice);

export const getRoundedValue = value => Math.round(value * 100) / 100;
