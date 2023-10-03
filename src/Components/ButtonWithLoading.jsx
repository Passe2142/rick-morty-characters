/* eslint-disable react/prop-types */
import {Spinner, Button} from 'react-bootstrap';

function ButtonWithLoading(
    {
    variant = 'primary',
    type='submit',
    loading,
    children }
    ) {
    return (
        <Button type={type} vraiant={variant} disabled={loading}>
            {loading && <Spinner animation="border" role="sm"></Spinner>}
            {children}
        </Button>

    );
}

export default ButtonWithLoading;