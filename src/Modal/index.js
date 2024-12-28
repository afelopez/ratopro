import React, { useContext } from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { TodoContext } from "../todo/Context";

function Modal({ children }) {

    const {setIsOpenModal} = useContext(TodoContext);
    return ReactDOM.createPortal(
        <div className='Modal'>
            <div onClick={() => setIsOpenModal(false)} className='Modal-button'>X</div>  
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };