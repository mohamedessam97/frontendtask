import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import BackdropSpinner from "../components/backdropSpinner/BackdropSpinner"
import AlertToaster from "../components/alertToaster/AlertToaster"
import SortSelect from "../components/sortSelect/SortSelect"
import Paginator from "../components/paginator/Paginator"
import SearchBar from "../components/searchBar/SearchBar"
import Products from "../components/products/Products"
import Sidebar from "../components/sidebar/Sidebar"
import Navbar from "../components/Menubar/Menubar"

import classes from "./ProductsPage.module.scss"


const ProductsPage = () => {

    const loading = useSelector(state => state.status.loading)
    const hasError = useSelector(state => state.status.hasError)
    const errorMsg = useSelector(state => state.status.errorStatus)

    const [isError, setIsError] = useState(false)

    useEffect(() => {
        //for diplay error getting from the server and hidden it after seconds
        setIsError(true)

        setTimeout(() => {
            setIsError(false)
        }, 4000)

    }, [hasError])
    return (
        <div>
            <Navbar />
            <div className={classes.innerContainer}>
                <Sidebar />

                <div className={classes.outerContainer} >
                    <div className={classes.search}>
                        <SearchBar />
                    </div>
                    <SortSelect />

                    <Products />
                    <Paginator />
                </div>
            </div>
            {loading && <BackdropSpinner />}
            {isError && <AlertToaster msg={errorMsg} varient='danger' />}
        </div>
    )
}

export default ProductsPage