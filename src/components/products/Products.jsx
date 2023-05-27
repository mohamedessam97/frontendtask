import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getAllProducts } from '../../redux/actions/productActions';
import img from "../../assets/images/box-empty-state-single-isolated-icon-with-outline-style-free-vector.jpg"
import ProductCard from '../productCard/ProductCard';
import classes from './products.module.scss';





const Products = () => {

    const dispatch = useDispatch()

    //select the products from state
    const products = useSelector(state => state.products.filteredProducts);

    useEffect(() => {

        // dispatch action to get all products from api
        dispatch(getAllProducts())

    }, [dispatch])


    return (
        <>
            <div className={classes.container}>
                {products &&
                    products?.map((product, i) => (
                        i < 12 ? <ProductCard {...product} key={product.id} /> : null
                    ))

                }
            </div>

            <div className={classes.statusContainer}>

                {products?.length || <div className={classes.empty}>
                    <img src={img} alt="" />
                    Their is no products
                </div>}
            </div>
        </>
    );
}


export default Products;
