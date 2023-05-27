import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getSortedProducts } from '../../redux/actions/productActions';
import classes from './SortSelect.module.scss';

import Form from 'react-bootstrap/Form';


const SortSelect = () => {
    const dispatch = useDispatch()

    const [sort, setSort] = useState('sort')

    useEffect(() => {
        //dispatch action to sort product when sort value changes
        dispatch(getSortedProducts(sort))
    }, [sort , dispatch])



    return (
        <Form.Select aria-label="Default select example" className={classes.select} onChange={(e) => setSort(e.target.value)} value={sort}>
            <option hidden value='sort'>Sort</option>
            <option value="az">From A - Z</option>
            <option value="za">From Z - A</option>
            <option value="lh">Low to High Price</option>
            <option value="hl">High to Low Price</option>
        </Form.Select>
    )
}

export default SortSelect