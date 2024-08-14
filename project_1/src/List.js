import React from 'react';
import PropTypes from 'prop-types';

// Define the List component
const List = ({ items }) => {
    // Ensure items is an array before mapping
    return (
        <ul>
            {items && items.length > 0 ? (
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            ) : (
                <li>No items available</li>
            )}
        </ul>
    );
};

// Set default props in case 'items' is not passed
List.defaultProps = {
    items: [],
};

// Validate the type of 'items' prop
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
};

export default List;
