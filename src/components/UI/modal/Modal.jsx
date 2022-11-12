import React from 'react'
import classes from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

    const modalClasses = [classes.myModal]

    if (visible) {
        modalClasses.push(classes.active);
    }

    return (
        <div className={modalClasses.join(' ')}>
            <div className="trip-popup">
                <button className="trip-popup__close" onClick={() => setVisible(false)}>×</button>
                {children}
            </div>
            
        </div>
    )
}

export default Modal