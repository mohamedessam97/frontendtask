import { useCallback ,useState } from 'react';
import { useDispatch } from 'react-redux';

import {DropdownButton , Dropdown , InputGroup , Form , Button} from 'react-bootstrap';

import { clearFilter, searchProducts } from '../../redux/actions/productActions';

import classes from './SearchBar.module.scss'





const SearchBar = () => {
    const dispatch = useDispatch();
    
    const [filterValue, setFilterValue] = useState('Name');
    const [searchKeyword, setSearchKeyword] = useState('');


    const handleSelectFilter = (e) => {
        // using filter value to allow the user to search in whick filter they want
        setFilterValue(e);
    }



    const handleClear = (e) => {
        // method for handling clear filters and search
        setFilterValue('Name')
        setSearchKeyword('')
        dispatch(clearFilter());
    }

    const handleSearch =(e) =>{
        // method for handling user search
        setSearchKeyword(e.target.value)
        dispatch(searchProducts({ filter: filterValue, keyword: e.target.value }));
    }


    return (
        <div className={classes.container}>
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="primary"
                    title={filterValue}
                    id="input-group-dropdown-1"
                    onSelect={useCallback(handleSelectFilter)}
                >
                    <Dropdown.Item eventKey='Name'>Name</Dropdown.Item>
                    <Dropdown.Item eventKey='Brand'>Brand</Dropdown.Item>
                    <Dropdown.Item eventKey='Category'>Category</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" onChange={useCallback(handleSearch)} value={searchKeyword} />
            </InputGroup>
            <Button variant="danger" onClick={handleClear}>Clear</Button >


        </div>
    )
}

export default SearchBar