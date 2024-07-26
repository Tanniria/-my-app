import React from 'react'
import Popup from './Popup';

export default function EditProfilePopup({ isOpen, onClose }) {
    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}>
        </Popup>
    );
};