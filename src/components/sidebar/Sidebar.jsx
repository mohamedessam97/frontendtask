import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsCategory } from '../../redux/actions/productActions';

import classes from './Sidebar.module.scss'



const Sidebar = () => {
    const dispatch = useDispatch()
    
    const [category, setCategory] = useState(null)

    const categories = useSelector(state => state.products.categoryList)
    const isCleared = useSelector(state => state.products.isCleared)


    const handleChange = (e) => {
        // method for handling the change of the category and to get the filterd product
        setCategory(e.target.value)
        dispatch(getProductsCategory(e.target.value))
    }

    useEffect(() => {
        //used to clear the selection of the button when clear button is clicked
        isCleared && setCategory(null)
    }, [isCleared])

    return (
        <div className={classes.sidebar}>

            <h3>Filters</h3>

            <div className={classes.categories}>

                <h5>Categories</h5>

                {categories && [...categories].map((type) => (

                    <div key={`${type}`} className={classes.category}>

                        <input
                            type='radio'
                            id={type}
                            value={type}
                            name='category'
                            checked={category === type}
                            onChange={handleChange}
                        />

                        <label htmlFor={type}>{type}</label>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar