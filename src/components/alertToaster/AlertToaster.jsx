import Alert from 'react-bootstrap/Alert';
import classes from './AlertToaster.module.scss';
const AlertToaster = (props) => {

    const {msg , varient} = props
    return (
        <Alert variant={varient} className={classes.alert}>
            {msg}
        </Alert>

    )
}
export default AlertToaster