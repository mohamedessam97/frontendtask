import classes from './BackdropSpinner.module.scss';
import Spinner from 'react-bootstrap/Spinner';


const BackdropSpinner = () => {
    return (
        <div className={classes.backdrop}>
            <Spinner animation="border" role="status" className={classes.spinner}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
export default BackdropSpinner