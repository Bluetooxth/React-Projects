import React from 'react';

const Button = ({ onClick, children, className, ...rest }) => {
    return (
        <button onClick={onClick} className={className} {...rest}>
            {children}
        </button>
    );
};

export default Button;