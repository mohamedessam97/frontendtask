import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from 'react-bootstrap/Pagination';

import { getPageProducts } from '../../redux/actions/productActions';

const Paginator = () => {
    const dispatch = useDispatch()

    const [activePage, setActivePage] = useState(1)

    const total = useSelector(state => state.products.total)

    const pagesNo = Math.floor(total / 12)

    let items = [];

    // make pagination items depend on the total number of products and the page size

    for (let number = 1; number <= pagesNo; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => setActivePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }


    useEffect(() => {
        // dispatch action to get the product of the selected page
        dispatch(getPageProducts(activePage))

    }, [activePage , dispatch])


    return (
        <Pagination className='align-self-center'>

            <Pagination.Prev onClick={() => setActivePage((number) => number <= 1 ? number : number - 1)} />
            
            {items}

            <Pagination.Next onClick={() => setActivePage((number) => number >= pagesNo ? number : number + 1)} />

        </Pagination>


    )
}
export default Paginator