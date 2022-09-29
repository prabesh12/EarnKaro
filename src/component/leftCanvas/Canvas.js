import React from 'react'
import Offcanvas from './LeftOffCanvas';
const options = [
    {
      scroll: true,
      backdrop: true,
    },
  ];
const Canvas =() =>{
    return (
      <>
        {options.map((props, idx) => (
          <Offcanvas key={idx} {...props} />
        ))}
      </>
    );
  }
  export default Canvas;