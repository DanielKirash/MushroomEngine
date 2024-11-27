import React, { ReactNode } from 'react';
import './modal.css';

interface ModalProps {
    show: boolean;
    handleClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose, children }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;