import React from 'react';

function Screen(props) {
    return (
        <div className="p-6 w-full bg-black text-white rounded-xl shadow-md text-right lg:text-9xl text-4xl col-span-4">
          {props.value}
        </div>
    );
  }

  Screen.defaultProps = {
      value: 0
  }
  
  export default Screen;