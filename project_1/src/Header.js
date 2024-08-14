import React from 'react';

// Define the Header component
const Header = ({ title }) => {
    return (
        <header>
            <p>Create a component named "Header" that takes one prop - "title". The component should display a header
            element with the gi2en title</p>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
