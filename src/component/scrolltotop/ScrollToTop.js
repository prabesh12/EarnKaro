import React, { useState, useEffect } from "react";

const Scroll = ({ showBelow }) => {

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <button
          onClick={handleClick}
          className="scroll-to-top"
          aria-label="to top"
        > 
             <img src="../icons/up.png" alt="" />
        </button>
      )}
    </div>
  );
};

export default Scroll;


