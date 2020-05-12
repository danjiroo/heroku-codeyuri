import React, { useEffect, useRef } from 'react'

const Modal = ({src, alt, desc, title, isOpen, setIsOpen}) => {
    const modalRef = useRef();

    const handleClose = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = e => {
          if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false)
          }
        }
    
        // Bind the event click
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

    return (
        <div className="mymodal">
          <div className="modal_con">
            <div className="modal_close">
              <p onClick={handleClose}>x</p>
            </div>
            <div className="modal_body" ref={modalRef}>
              <img src={src} alt={alt} />
              <div className="modal_desc">
                  <h3>{title}</h3>
                  <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Modal
