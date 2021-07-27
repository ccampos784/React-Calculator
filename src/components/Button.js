import React from 'react';

function Button(props) {
    let buttonClassNames = "h-full border border-2 border-black text-white shadow-md text-4xl";

    /* Set color */
    buttonClassNames = buttonClassNames + ' ' + (props.color === 'orange' ? 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700' : 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700');

    /* Set width */
    buttonClassNames = buttonClassNames + ' ' + (props.width > 1 ? 'col-span-' + props.width : 'col-span-1');

    return (
         <button className={buttonClassNames} onClick={props.clickHandler(props.text)}>
            {props.text}
        </button>
    );
}   

Button.defaultProps = {
    clickHandler: text => () => {
        console.log('No click handler defined for button!');
    }
}

export default Button;