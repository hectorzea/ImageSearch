import React from 'react';

const ErrorMessage = ({message}) => {
    return (
        <p className="my-3 p-4 text-center text-white alert alert-danger">{message}</p>
    );
};

export default ErrorMessage;