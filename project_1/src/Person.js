import React from 'react';

// Define the Person component
const Person = (props) => {
    return (
        <div>
            <p>Create a component named "Person" that takes two props - "name" and "age". The co6ponent should
            display the persons name and age in a paragraph element</p>
            <p>{`Name: ${props.name}, Age: ${props.age}`}</p>
        </div>

        
    );
};

export default Person;
