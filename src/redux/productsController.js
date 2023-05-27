export const filterProducts = (products, payload) => {
  return products?.filter((product) => {
    // check if have the attribute that the user want to search with it and if exists check
    //  if the search keyword includes on it and then retrun the products that matches that
    if (product.hasOwnProperty(payload.filter.toLowerCase())) {
      return product[payload.filter.toLowerCase()]
        .toLowerCase()
        .includes(payload.keyword.toLowerCase());
    } else {
      return product.title
        .toLowerCase()
        .includes(payload.keyword.toLowerCase());
    }
  });
};

export const sortProducts = (products, payload) => {
  let arr = [...products];

  //sort the products depend on switch case 
  // every case change with the payload 
  arr.sort((a, b) => {
    switch (payload) {
      case "az": {  // to sort the products in ascending order
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      }

      case "za": { //to sort the products in descending order
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      }
      case "lh": { // to sort the product from low price to high price
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      }
      case "hl": {// to sort the product from  high price to low price 
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      }

      default :
        return 0
    }
  });
  return arr;
};
