const invalidQuery = `
  {
    invalid
  }
`;

const booksQuery = `
  {
    books {
      isbn
      title
      price
      cover
      synopsis
    }
  }
`;

const commercialOffersWithoutIsbn = `
  {
    offers {
      value
      type
      sliceValue
    }
  }
`;

const commercialOffers = `
  {
    offers(isbns: "c8fabf68-8374-48fe-a7ea-a00ccd07afff,a460afed-e5e7-4e39-a39d-c885c05db861") {
      value
      type
      sliceValue
    }
  }
`;

module.exports = {
  invalidQuery,
  booksQuery,
  commercialOffersWithoutIsbn,
  commercialOffers,
};
