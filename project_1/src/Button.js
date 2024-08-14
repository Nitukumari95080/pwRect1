import React from 'react';

// Define the Button component
const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            
            {text}
        </button>
    );
};

export default Button;
