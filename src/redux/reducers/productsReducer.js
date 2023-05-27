import { filterProducts, sortProducts } from "../productsController";
const initialState = {products: [] , filteredProducts:[] , brandList:[] , categoryList :[] , isCleared : false  , total:0 , page :1};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_PRODUCTS":

    const categories = payload.products.map((product) => product.category);
    const brands = payload.products.map((product) => product.brand);
    return {products: payload.products , filteredProducts: payload.products, total : payload.total , brandList : new Set(brands) , categoryList : new Set(categories) , isCleared : false};
    
    case "SEARCH_PRODUCTS":
    // method for filter the products
    const data =  filterProducts(state.products , payload)

    return {...state ,  filteredProducts: data };
    
    case "GET_PRODUCTS_CATEGORY":

    //filter the product by category
    const productsCategory = payload ?state.products.filter(res=>res.category=== payload) : state.products ;

    return {...state ,  filteredProducts: productsCategory};
    
    case "CLEAR_FILTER":

    return {...state , filteredProducts: state.products, isCleared : true  , page: 1};

    case "GET_PAGE_PRODUCTS":


    return {...state , filteredProducts : payload.products , isCleared : true};

    case "GET_SORTED_PRODUCTS":
      
    //method for sort the products
    const sortedProducts =sortProducts(state.products , payload)
    return {...state , filteredProducts : sortedProducts , isCleared : true};
    
    default:
      return state;
  }
};

export default reducer;
