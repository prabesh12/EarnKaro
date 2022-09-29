import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvas = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
    <div className="canvas">
      <Button onClick={toggleShow} className="me-2 canvas-button" >
        <img src="./icons/menu.png" alt="" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <p>Hello</p>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
}

export default OffCanvas;


