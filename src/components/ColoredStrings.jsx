import React from 'react';

const ColoredStrings = (props) => {
    return (
        <h1 style={{ color: props.color, backgroundColor: props.bgc }}>
            {props.str}
        </h1>
    );
};

export default ColoredStrings;
